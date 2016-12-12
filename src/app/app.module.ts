import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ProjectsPage } from '../pages/projects/projects';
import { ProjectsEditPage } from '../pages/projects-edit/projects-edit';
import { ProjectsNewPage } from '../pages/projects-new/projects-new';
import { TabsPage } from '../pages/tabs/tabs';
import { OverviewPage } from '../pages/overview/overview';
import { JobCostPage } from '../pages/job-cost/job-cost';
import { SubcontractorsPage } from '../pages/subcontractors/subcontractors';
import { FundsPage } from '../pages/funds/funds';
import { ExpendituresPage } from '../pages/expenditures/expenditures';
import { ConstantService } from '../providers/constant.service';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SignupPage,
    ProjectsPage,
    ProjectsEditPage,
    ProjectsNewPage,
    TabsPage,
    OverviewPage,
    JobCostPage,
    SubcontractorsPage,
    FundsPage,
    ExpendituresPage
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
    TabsPage,
    OverviewPage,
    JobCostPage,
    SubcontractorsPage,
    FundsPage,
    ExpendituresPage
  ],
  providers: [
    ConstantService
  ]
})
export class AppModule {}