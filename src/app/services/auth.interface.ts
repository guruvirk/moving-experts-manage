import { User } from './models';
import { Tenant } from './models';

export interface IAuth {
  currentUser(): User;
  currentTenant(): Tenant;
  hasPermission(permissions: string | string[]): boolean;
}
