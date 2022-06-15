import { ApiService } from './shared/api.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { ProfessionalComponent } from './professional/professional.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EmployeeComponent,
    SkillsetComponent,
    ProfessionalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule,HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,MatToolbarModule,
 FormsModule,ReactiveFormsModule
 ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
