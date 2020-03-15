import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  response;
  socialusers = new SocialUser();
  constructor(public OAuth: AuthService, private router: Router) {

  }

  ngOnInit(): void {
  }

  public socialSignIn(socialProvider: string) {
    let socialPlatformProvider;
    if (socialProvider === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.OAuth.signIn(socialPlatformProvider).then((socialusers: SocialUser) => {
      console.log(socialProvider, socialusers);
      console.log(socialusers);
      if (socialusers.email.split('@')[1] === 'uniminuto.edu.co') {
        this.Savesresponse(socialusers);
      } else {
        alert('No pertence a la institucion');
      }
    });
  }
  Savesresponse(socialusers: SocialUser) {
    this.socialusers = socialusers;
    localStorage.setItem('socialusers', JSON.stringify(this.socialusers));
    console.log(localStorage.setItem('socialusers', JSON.stringify(this.socialusers)));
    this.router.navigate([`/Dashboard`]);
  }
}


