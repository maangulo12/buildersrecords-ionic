import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ProjectsPage } from '../pages/projects/projects';
import { ProjectsEditPage } from '../pages/projects-edit/projects-edit';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    ProjectsPage,
    ProjectsEditPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    ProjectsPage,
    ProjectsEditPage
  ],
  providers: []
})
export class AppModule {}
