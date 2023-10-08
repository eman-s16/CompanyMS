import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HrModuleComponent } from './hr-module/hr-module.component';
import { SwDevelopmentComponent } from './sw-development/sw-development.component';
import { QaComponent } from './qa/qa.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  { path: 'hr', component: HrModuleComponent },
  { path: 'sw', component: SwDevelopmentComponent },
  { path: 'qa', component: QaComponent },
  { path: 'team', component: TeamComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
