import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import connectDB from './configs/database.config.js';
import { app, server } from './socket/socket.js';
dotenv.config();

const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(loggerMiddleware);

// Routes
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';


app.use('/api/auth', authRoutes);

app.use('/api/messages', messageRoutes);

app.use('/api/users', userRoutes);

app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '/frontend', 'dist', 'index.html'));
});

server.listen(PORT, () => {
	// Connect to MongoDB
	connectDB();
	console.log(`Server started on port ${PORT}`);
});
