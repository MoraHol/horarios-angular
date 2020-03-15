import { AuthService, SocialUser } from 'angularx-social-login';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  socialusers = new SocialUser();
  constructor(public OAuth: AuthService, private router: Router) { }
  ngOnInit() {
    this.socialusers = JSON.parse(localStorage.getItem('socialusers'));
    console.log(this.socialusers.name);
    this.OAuth.authState.subscribe((user) => {
      console.log(user);
    });
  }
  logout() {
    alert(1);
    this.OAuth.signOut().then(data => {
      localStorage.removeItem('socialusers');
      this.router.navigate([`/login`]);
    });
  }

}
