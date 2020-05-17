import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, SocialUser } from 'angularx-social-login';
import { Component, OnInit } from '@angular/core';

import { AppComponent } from './../../app.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  socialusers = new SocialUser();
  constructor(
    public OAuth: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private appComponent: AppComponent
  ) {}
  ngOnInit() {
    this.socialusers = JSON.parse(localStorage.getItem('socialusers'));
    console.log(this.socialusers.name);
    this.OAuth.authState.subscribe(user => {
      console.log(user);
    });
    this.activatedRoute.data.subscribe(data => {
      console.log(data);
      this.appComponent.setTitle(data.title);
    });
  }
  logout() {
    this.OAuth.signOut().then(data => {
      localStorage.removeItem('socialusers');
      this.router.navigate([`/login`]);
    });
  }
}
