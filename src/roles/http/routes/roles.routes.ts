import { Router } from 'express';
import { Role } from '@roles/entities/Role';

const rolesRouter = Router();

const roles = [];

rolesRouter.post('/', (request, response) => {
  const { name } = request.body;

  const role = new Role();

  Object.assign(role, {
    name,
    created_at: new Date(),
  });

  roles.push(role);

  response.send(201).json(role);
});

export { rolesRouter };
