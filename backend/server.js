import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './configs/database.config.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

app.get('/', (req, res) => {
	// root route http://localhost:5000/
	res.send('Hello World!');
});

app.get('/api/', (req, res) => {
	// root route http://localhost:5000/api/
	res.send('Hello World!');
});

app.use('/api/auth', authRoutes);

app.use('/api/messages', messageRoutes);

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
	// Connect to MongoDB
	connectDB();
	console.log(`Server started on port ${PORT}`);
});
