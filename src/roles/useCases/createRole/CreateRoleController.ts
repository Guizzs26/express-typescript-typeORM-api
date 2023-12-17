import { Request, Response } from 'express';
import { RolesRepository } from '@roles/repositories/RoleRespository';
import { AppError } from '@shared/errors/AppError';

export class CreateRoleController {
  handle(request: Request, response: Response) {
    const { name } = request.body;

    const rolesRepository = new RolesRepository();
    const roleAlreadyExists = rolesRepository.findyByName(name);

    if (roleAlreadyExists) {
      throw new AppError('Role Already Exists');
    }

    const role = rolesRepository.create({ name });

    return response.status(201).json(role);
  }
}
