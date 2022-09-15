import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usermodel } from '../facultyregistration/users.model';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }

  newUser(user: string | Usermodel){
    console.log("service"+user);
    return this.http.post("http://localhost:3000/api/add-student",{user})
    .subscribe(data=>{console.log(data)})
  }
}
