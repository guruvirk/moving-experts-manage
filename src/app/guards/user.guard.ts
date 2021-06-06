import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RoleService } from '../services/role.service';
import { User } from '../services/models';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(
    private auth: RoleService,
    private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = this.auth.currentUser();
    if (!currentUser) {
      this.router.navigate(["login"])
    }
    return this.rolePermissins(currentUser, next);
  }

  rolePermissins(user: User, next: ActivatedRouteSnapshot) {
    if (!user) {
      this.router.navigate(["login"])
    }

    if (!next.data['permissions']) {
      return true;
    }

    const permissions = next.data['permissions'] as string[];

    const canAccess = this.auth.hasPermission(permissions);

    if (!canAccess) {
      this.router.navigate(["login"])
    }

    return true;
  }

}
