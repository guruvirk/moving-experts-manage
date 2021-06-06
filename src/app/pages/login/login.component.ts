import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../services/role.service';
import { Router } from '@angular/router';
import { UxService } from '../../services/ux.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password: String
  email: string
  isLoading = false
  isMobile: boolean;
  isPassVisible = false;

  constructor(private auth: RoleService,
    private router: Router,
    private uxService: UxService) {
    if (window.screen.width < 781) {
      this.isMobile = true
    }
  }

  ngOnInit() {
    if (this.auth.currentUser()) {
      this.router.navigate([""])
    }
  }

  back() {
    this.uxService.back()
  }

  login() {
    if (!this.email) {
      this.uxService.handleError("Email is Required")
      return
    }
    if (!this.password) {
      this.uxService.handleError("Password is Required")
      return
    }
    this.auth.loginWithEmail(this.email, this.password)
  }

}
