import { RolesRepository } from '@roles/repositories/RoleRespository';
import { CreateRoleUseCase } from './CreateRoleUseCase';
import { CreateRoleController } from './CreateRoleController';

const rolesRepository = new RolesRepository();

const createRoleUseCase = new CreateRoleUseCase(rolesRepository);

export const createRolesController = new CreateRoleController(
  createRoleUseCase,
);
