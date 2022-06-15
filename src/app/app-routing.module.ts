import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfessionalComponent } from './professional/professional.component';
import { SkillsetComponent } from './skillset/skillset.component';


const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'login',component:LoginComponent},
  {path: 'skillset',component:SkillsetComponent},
  {path: 'professional',component:ProfessionalComponent},
  {path: 'employee',component:EmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
