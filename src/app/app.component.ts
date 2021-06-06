import { Component } from '@angular/core';
import { Tenant, User } from './services/models';
import { RoleService } from './services/role.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  currentUser: User;
  currentTenant: Tenant;
  isMobile = false;

  constructor(public auth: RoleService) {
    this.auth.userChanges.subscribe((user) => {
      this.currentUser = user;
    });
    this.auth.tenantChanges.subscribe((tenant) => {
      this.currentTenant = tenant;
    });
  }

  ngOnInit() {
    this.currentUser = this.auth.currentUser();
    this.currentTenant = this.auth.currentTenant();
  }

  logout() {
    this.auth.logout()
  }

}
