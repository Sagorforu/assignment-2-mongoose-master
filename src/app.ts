import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { userRoutes } from './app/modules/user/user.route';

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/users', userRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('assignment mongoose master going on....');
});

export default app;
