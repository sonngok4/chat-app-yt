import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';

class messageController {
	static async sendMessage(req, res) {
		try {
			const { message } = req.body;
			const { id: recipientId } = req.params;
			const senderId = req.user._id;

			let conversation = await Conversation.findOne({
				participants: { $all: [senderId, recipientId] },
			});

			if (!conversation) {
				conversation = new Conversation({
					participants: [senderId, recipientId],
				});
			}

			const newMessage = new Message({
				senderId,
				recipientId,
				message,
			});

			if (newMessage) {
				conversation.messages.push(newMessage._id);
			}

			// await conversation.save();
			// await newMessage.save();

			await Promise.all([conversation.save(), newMessage.save()]);

			res.status(200).send(newMessage);
		} catch (error) {
			console.log('Error in sendMessage controller: ', error.message);
			res.status(500).json({ error: 'Internal Server Error' });
		}
		// Send the message to the recipient using the MessageService
	}

	static async getMessages(req, res) {
		try {
			const { id: recipientId } = req.params;
			const senderId = req.user._id;

			const conversation = await Conversation.findOne({
				participants: { $all: [senderId, recipientId] },
			}).populate('messages');

			if (!conversation) {
				return res.status(200).json({ messages: [] });
			}

			res.status(200).json({ messages: conversation.messages });
		} catch (error) {
			console.log('Error in getMessages controller: ', error.message);
			res.status(500).json({ error: 'Internal Server Error' });
		}
	}
}

export default messageController;
