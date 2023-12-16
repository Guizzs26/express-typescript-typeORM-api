import 'dotenv/config';
import express, { Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { router } from './routes';
import { AppError } from '@shared/errors/AppError';

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

app.use((error: Error, request: Request, response: Response) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  // Erros que não são instâncias da classe, no caso os erros de servidor (50*)
  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Servido inicializado na porta ${process.env.PORT}`);
});
