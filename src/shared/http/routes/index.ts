import { Router } from 'express';
import { rolesRouter } from '@roles/http/routes/roles.routes';

const router = Router();

router.get('/', (request, response) => {
  return response.json({ message: 'Olá dev' });
});

router.use('/roles', rolesRouter);

export { router };
