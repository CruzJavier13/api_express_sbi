import {Request, Response } from 'express';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes/routes';
import path from 'path';

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/', routes);

app.use((req: Request, res: Response) => {
    res.status(404).json({ message: 'Route not found' });
});

export default app;
