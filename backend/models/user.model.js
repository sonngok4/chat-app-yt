import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
			minlength: 6,
		},
		name: {
			type: String,
			required: true,
			trim: true,
		},
		gender: {
			type: String,
			enum: ['male', 'female'],
		},
		avatar: {
			type: String,
			default: 'https://www.gravatar.com/avatar/?d=mp',
		},
		lastLogin: {
			type: Date,
		},
		role: {
			type: String,
			enum: ['user', 'admin'],
			default: 'user',
		},
	},
	{ timestamps: true },
);

// Hash password before saving to database
userSchema.pre('save', async function(next) {
	if (!this.isModified('password')) {
		next();
	}
	this.password = await bcrypt.hash(this.password, 12);
	next();
});

// Compare password with hashed password in database
userSchema.methods.comparePassword = async function(candidatePassword) {
	return await bcrypt.compare(candidatePassword, this.password);
};

// Export User model
const User = mongoose.model('User', userSchema);

// Middleware to update lastLogin field
userSchema.pre('save', function(next) {
	this.lastLogin = Date.now();
	next();
});

// Export User model
export default User;
