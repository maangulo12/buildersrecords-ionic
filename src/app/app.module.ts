import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ProjectsPage } from '../pages/projects/projects';
import { ProjectsEditPage } from '../pages/projects-edit/projects-edit';
import { ProjectsNewPage } from '../pages/projects-new/projects-new';
import { OverviewPage } from '../pages/overview/overview';
import { ConstantService } from '../providers/constant.service';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    ProjectsPage,
    ProjectsEditPage,
    ProjectsNewPage,
    OverviewPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    ProjectsPage,
    ProjectsEditPage,
    ProjectsNewPage,
    OverviewPage
  ],
  providers: [
    ConstantService
  ]
})
export class AppModule {}