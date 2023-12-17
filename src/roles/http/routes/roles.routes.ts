import { CreateRoleController } from '@roles/useCases/createRole/CreateRoleController';
import { Router } from 'express';

const rolesRouter = Router();
const createRolesController = new CreateRoleController();

rolesRouter.post('/', (request, response) => {
  return createRolesController.handle(request, response);
});

rolesRouter.get('/', () => {
  // return response.json(roles);
});

export { rolesRouter };
