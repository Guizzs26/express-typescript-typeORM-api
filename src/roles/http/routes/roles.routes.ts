import { createRolesController } from '@roles/useCases/createRole';
import { Router } from 'express';

const rolesRouter = Router();

rolesRouter.post('/', (request, response) => {
  return createRolesController.handle(request, response);
});

rolesRouter.get('/', () => {
  // return response.json(roles);
});

export { rolesRouter };
