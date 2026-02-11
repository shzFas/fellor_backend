import express from 'express';
import healthRoute from './routes/health.route';

const app = express();

app.use(express.json());

app.use('/health', healthRoute);

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

export default app;