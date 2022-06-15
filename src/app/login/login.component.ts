import { ApiService } from './../shared/api.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
import { LoginModel } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

formValue !: FormGroup;
loginModelObj : LoginModel = new LoginModel();
employeeData ! : any;
 constructor(private FormBuilder: FormBuilder,
  private api : ApiService) { }

  ngOnInit(): void {
this.formValue = this.FormBuilder.group({
  name : [''],
  relationship : [''],
  age : [''],
  occupation : [''],
})
this.getAllEmployee();
  }

postEmployeeDetails(){
  this.loginModelObj.name = this.formValue.value.name;
  this.loginModelObj.relationship = this.formValue.value.relationship;
  this.loginModelObj.age = this.formValue.value.age;
  this.loginModelObj.occupation = this.formValue.value.occupation;

  this.api.postEmployee(this.loginModelObj)
  .subscribe(res=>{
    console.log(res);
    alert('Employee Added Successfully');
    let ref = document.getElementById('cancel')
    ref?.click();
    this.formValue.reset();
    this.getAllEmployee();
})
}

getAllEmployee(){
  this.api.getEmployee()
  .subscribe(res=>{
  this.employeeData =res;
  })
}

deleteEmployee(row : any){
  this.api.deleteEmployee(row.id)
  .subscribe(res=>{
    alert('Employee Deleted');
    this.getAllEmployee();



  })
}

onEdit(row : any){
  this.loginModelObj.id =row.id;
this.formValue.controls['name'].setValue(row.name);
this.formValue.controls['relationship'].setValue(row.relationship);
this.formValue.controls['age'].setValue(row.age);
this.formValue.controls['occupation'].setValue(row.occupation);
}
updateEmployeeDetails(){
  this.loginModelObj.name = this.formValue.value.name;
  this.loginModelObj.relationship = this.formValue.value.relationship;
  this.loginModelObj.age = this.formValue.value.age;
  this.loginModelObj.occupation = this.formValue.value.occupation;

this.api.updateEmployee(this.loginModelObj,this.loginModelObj.id)
.subscribe(res=>{
  alert('updated successfully');
  let ref = document.getElementById('cancel')
    ref?.click();
    this.formValue.reset();
    this.getAllEmployee();
})
}

}
