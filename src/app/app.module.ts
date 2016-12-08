import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ProjectsPage } from '../pages/projects/projects';
import { ProjectsEditPage } from '../pages/projects-edit/projects-edit';
import { ProjectsNewPage } from '../pages/projects-new/projects-new';
import { ConstantService } from '../providers/constant.service';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    ProjectsPage,
    ProjectsEditPage,
    ProjectsNewPage
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
    ProjectsEditPage,
    ProjectsNewPage
  ],
  providers: [
    ConstantService
  ]
})
export class AppModule {}