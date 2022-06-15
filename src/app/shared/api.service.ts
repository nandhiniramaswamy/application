import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postEmployee(data : any){
    return this.http.post<any>("src/assets/employee/Employees.json", data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getEmployee(){
    return this.http.get<any>("src/assets/employee/Employees.json")
    .pipe(map((res:any)=>{
      debugger;
      return res;
    }))
  }

  updateEmployee(data : any,id:number){
    return this.http.put<any>("src/assets/employee/Employees.json"+id, data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteEmployee(id: number){
    return this.http.delete<any>("src/assets/employee/Employees.json" +id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }



}
