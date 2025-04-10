import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import auth_route from './routes/auth.js';
import applications_route from './routes/applications.js';
import { protectRoute } from './middlewares/protectRoute.js';

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173", 'https://job-board-assignment-frontend.vercel.app'],
    credentials: true,
  })
);
app.use(cookieParser());

// Auth API's
app.use('/api/auth', auth_route);
app.use('/api/applications', protectRoute, applications_route);

export default app;
