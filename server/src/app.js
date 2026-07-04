import express from 'express';
import cors from 'cors';
import routes from './routes/index.js';

const app = express();

app.use(cors());
app.use(express.json());

// Load API routes under /api
app.use('/api', routes);

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Unhandled internal error:', err);
  res.status(500).json({ error: 'Đã xảy ra lỗi máy chủ nội bộ.' });
});

export default app;
