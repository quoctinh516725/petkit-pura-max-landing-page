import dotenv from 'dotenv';
import app from './src/app.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`NodeJS Express server (Layered Architecture + Prisma) is running on http://localhost:${PORT}`);
});
