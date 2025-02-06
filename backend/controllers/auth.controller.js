import User from '../models/user.model.js';
import generateTokenAndSetCookie from '../utils/generateToken.js';
class AuthController {
	// register user
	static async signup(req, res) {
		try {
			const { name, email, password, confirmPassword, gender } = req.body;

			// check if all fields are filled
			if (!name || !email || !password || !confirmPassword || !gender) {
				return res.status(400).json({ error: 'All fields are required' });
			}

			// check if password and confirm password match
			if (password !== confirmPassword) {
				return res.status(400).json({ error: 'Passwords do not match' });
			}

			// check if user is already registered
			const user = await User.findOne({ email });
			if (user) {
				return res.status(400).json({ error: 'User already exists' });
			}

			const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
			if (!emailRegex.test(email)) {
				return res.status(400).json({ error: 'Invalid email' });
			}

			// generate avatar
			const maleAvatar = `https://avatar.iran.liara.run/public/boy?username=${name
				.toLowerCase()
				.replace(/\s+/g, '+')}`;
			const femaleAvatar = `https://avatar.iran.liara.run/public/girl?username=${name
				.toLowerCase()
				.replace(/\s+/g, '+')}`;

			// create new user
			const newUser = await User.create({
				name,
				email,
				password,
				gender,
				avatar: gender === 'male' ? maleAvatar : femaleAvatar,
			});

			if (newUser) {
				// Generate jwt token
				const token = generateTokenAndSetCookie(newUser._id, res);
				if (!token)
					return res.status(500).json({ error: 'Failed to generate token' });

				await newUser.save();

				return res.status(201).json({
					success: true,
					user: {
						_id: newUser._id,
						name: newUser.name,
						email: newUser.email,
						avatar: newUser.avatar,
					},
				});
			} else {
				return res.status(500).json({ error: 'Failed to create user' });
			}
		} catch (error) {
			console.log('Error in signup controller: ', error.message);
			res.status(500).json({ error: 'Internal Server Error' });
		}
	}

	static async login(req, res) {
		try {
			const { email, password } = req.body;
			if (!email || !password) {
				return res
					.status(400)
					.json({ error: 'Email and password are required' });
			}

			const user = await User.findOne({ email });
			if (!user) {
				return res.status(400).json({ error: 'User not found' });
			}

			const isMatch = await user.comparePassword(password);

			if (!isMatch) {
				return res.status(400).json({ error: 'Invalid credentials', });
			}

			// Generate jwt token
			const token = generateTokenAndSetCookie(user._id, res);
			if (!token)
				return res.status(500).json({ error: 'Failed to generate token' });

			return res.status(200).json({
				success: true,
				user: {
					_id: user._id,
					name: user.name,
					email: user.email,
					avatar: user.avatar,
				},
				token,
			});
		} catch (error) {
			console.log('Error in login controller: ', error.message);
			res.status(500).json({ error: 'Internal Server Error' });
		}
	}

	static async logout(req, res) {
		try {
			res.clearCookie('jwt', '', '');

			res
				.status(200)
				.json({ success: true, message: 'Logged out successfully' });
		} catch (error) {
			console.log('Error in logout controller: ', error.message);
			res.status(500).json({ error: 'Internal Server Error' });
		}
	}

	static async forgotPassword(req, res) {
		res.send('Forgot Password Route');
	}

	static async resetPassword(req, res) {
		res.send('Reset Password Route');
	}

	static async changePassword(req, res) {
		res.send('Change Password Route');
	}

	static async profile(req, res) {
		res.send('Profile Route');
	}

	static async updateProfile(req, res) {
		res.send('Update Profile Route');
	}

	static async deleteProfile(req, res) {
		res.send('Delete Profile Route');
	}

	static async verifyEmail(req, res) {
		res.send('Verify Email Route');
	}

	static async resendVerificationEmail(req, res) {
		res.send('Resend Verification Email Route');
	}

	static async verifyPhone(req, res) {
		res.send('Verify Phone Route');
	}

	static async resendVerificationPhone(req, res) {
		res.send('Resend Verification Phone Route');
	}

	static async verifyPhoneCode(req, res) {
		res.send('Verify Phone Code Route');
	}

	static async resendVerificationPhoneCode(req, res) {
		res.send('Resend Verification Phone Code Route');
	}

	static async verifyTwoFactorAuthentication(req, res) {
		res.send('Verify Two Factor Authentication Route');
	}

	static async enableTwoFactorAuthentication(req, res) {
		res.send('Enable Two Factor Authentication Route');
	}

	static async disableTwoFactorAuthentication(req, res) {
		res.send('Disable Two Factor Authentication Route');
	}

	static async verifyTwoFactorAuthentication(req, res) {
		res.send('Verify Two Factor Authentication Route');
	}

	static async enableTwoFactorAuthentication(req, res) {
		res.send('Enable Two Factor Authentication Route');
	}

	static async disableTwoFactorAuthentication(req, res) {
		res.send('Disable Two Factor Authentication Route');
	}

	static async verifyTwoFactorAuthentication(req, res) {
		res.send('Verify Two Factor Authentication Route');
	}

	static async enableTwoFactorAuthentication(req, res) {
		res.send('Enable Two Factor Authentication Route');
	}

	static async disableTwoFactorAuthentication(req, res) {
		res.send('Disable Two Factor Authentication Route');
	}

	static async verifyTwoFactorAuthentication(req, res) {
		res.send('Verify Two Factor Authentication Route');
	}
}

export default AuthController;
