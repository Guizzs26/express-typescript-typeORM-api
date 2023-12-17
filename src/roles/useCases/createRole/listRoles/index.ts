import { RolesRepository } from '@roles/repositories/RoleRespository';
import { ListRolesUseCase } from './ListRolesUseCase';
import { ListRolesController } from './ListRolesController';

const rolesRepository = new RolesRepository();
const listRolesUseCase = new ListRolesUseCase(rolesRepository);
export const listRolesController = new ListRolesController(listRolesUseCase);
