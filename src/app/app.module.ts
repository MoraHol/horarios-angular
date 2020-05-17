import { AuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GoogleLoginProvider } from 'angularx-social-login';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { SelPeriodComponent } from './components/sel-period/sel-period.component';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('872481872078-m6mfoll3iegboqurh4lhchna1sk9dgdr.apps.googleusercontent.com')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SelPeriodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule
  ],
  providers: [
    Title,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
