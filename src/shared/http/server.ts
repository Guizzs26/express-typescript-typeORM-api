import dotenv from 'dotenv';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
  return response.json({ message: 'Olá dev' });
});

app.listen(process.env.PORT, () => {
  console.log(`Servido inicializado na porta ${process.env.PORT}`);
});
