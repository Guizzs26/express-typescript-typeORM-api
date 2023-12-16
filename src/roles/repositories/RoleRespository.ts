import { Role } from '@roles/entities/Role';

type CreateRoleDTO = {
  name: string;
};

export class RolesRepository {
  roles: CreateRoleDTO[] = [];

  constructor() {
    this.roles = [];
  }

  create({ name }: CreateRoleDTO) {
    const role = new Role();

    Object.assign(role, {
      name,
      created_at: new Date(),
    });

    this.roles.push(role);
  }

  findAll() {}

  findyByName() {}
}
