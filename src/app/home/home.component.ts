import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormControlName, Validators, FormArray, FormBuilder   } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'myapplication';
  minDate:any = "02-04-2022";

  loginForm = new FormGroup({
    first: new FormControl('', Validators.required),
    last: new FormControl('', Validators.required),
    Position: new FormControl('', Validators.required),
    employee: new FormControl('', Validators.required),
    Mobile: new FormControl('', Validators.required),
    Home: new FormControl('', Validators.required),
    Office: new FormControl('', Validators.required),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Presentaddress: new FormControl('', Validators.required),
    Locality: new FormControl('', Validators.required),
    City: new FormControl('', Validators.required),
    Pincode: new FormControl('', Validators.required),
    District: new FormControl('', Validators.required),
    State: new FormControl('', Validators.required),
    Country: new FormControl('', Validators.required),
    Landmark: new FormControl('', Validators.required),
 
  })
  constructor() { }

  ngOnInit(): void {
  }

}
