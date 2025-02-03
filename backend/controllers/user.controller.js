import User from '../models/user.model.js';

class userController {
	static async getUsersForSideBar(req, res) {
		try {
			const loggedInUserId = req.user._id;

			const filteredUsers = await User.find({
				_id: { $ne: loggedInUserId },
			}).select('name email');

			res.status(200).json({ users: filteredUsers });
		} catch (error) {
			console.log('Error in getUsersForSideBar controller: ', error.message);
			res.status(500).json({ error: 'Internal Server Error' });
		}
	}
}

export default userController;
