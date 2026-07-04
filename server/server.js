import dotenv from 'dotenv';
import http from 'http';
import { Server } from 'socket.io';
import app from './src/app.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

// Save io instance to Express app so controllers can access it
app.set('io', io);

io.on('connection', (socket) => {
  console.log('Client connected to socket:', socket.id);
  socket.on('disconnect', () => {
    console.log('Client disconnected from socket:', socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`NodeJS Express server (Layered Architecture + Prisma + Socket.io) is running on http://localhost:${PORT}`);
});
