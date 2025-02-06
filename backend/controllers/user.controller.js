import User from '../models/user.model.js';
import Conversation from '../models/conversation.model.js';

class UserController {
	static async getUsersForSideBar(req, res) {
		try {
			const loggedInUserId = req.user._id;

			// Get all users except the logged-in user
			const users = await User.find({ _id: { $ne: loggedInUserId } }).select(
				'name email avatar',
			);

			// Get all conversations involving the logged-in user
			const conversations = await Conversation.find({
				participants: loggedInUserId,
			}).populate({
				path: 'messages',
				populate: {
					path: 'senderId',
					select: 'name',
				},
			});

			// Map users with their latest message information
			const usersWithMessages = await Promise.all(
				users.map(async user => {
					// Find conversation with this user
					const conversation = conversations.find(conv =>
						conv.participants.some(
							participantId => participantId.toString() === user._id.toString(),
						),
					);

					// Get the latest message if conversation exists
					let latestMessage = null;
					let latestMessageSender = null;
					let latestMessageTime = null;

					if (conversation && conversation.messages.length > 0) {
						const lastMessage =
							conversation.messages[conversation.messages.length - 1];
						latestMessage = lastMessage.message;
						latestMessageSender = lastMessage.senderId.name;
						latestMessageTime = lastMessage.createdAt;
					}

					return {
						_id: user._id,
						email: user.email,
						name: user.name,
						avatar: user.avatar,
						latestMessage: latestMessage,
						latestMessageSender: latestMessageSender,
						latestMessageTime: latestMessageTime,
					};
				}),
			);

			res.status(200).json({ users: usersWithMessages });
		} catch (error) {
			console.log('Error in getUsersForSideBar controller: ', error.message);
			res.status(500).json({ error: 'Internal Server Error' });
		}
	}
}

export default UserController;
