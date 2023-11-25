import express, { Application } from 'express';
const app: Application = express();
import cors from 'cors';
import { userRoutes } from './app/modules/user/user.route';

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/users', userRoutes);

app.get('/');

export default app;
