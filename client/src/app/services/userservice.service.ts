import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { response } from 'express';
import { Usermodel } from '../facultyregistration/users.model';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
error:any

  server_Address: String = ""
  //server_Address: String = "http://localhost:3000/api"

  constructor(private http:HttpClient,private router:Router) { }

  newUser(user: any){
    console.log("service"+user);
    return this.http.post(`${this.server_Address}/add-student`,{user})
   // .subscribe(data=>{console.log(data)})
   .subscribe((res) => {
    alert("Successfully Registered.please wait for approvel ");
    this.router.navigate(['login']);
}, (err) => {

    alert("  Email  already exists");

    this.router.navigate(['']);

});


  }

  loginuser(user:any){

    return this.http.post(`${this.server_Address}/login`,{user})
   /* .subscribe((res)=>{
      alert("Sucessful Login");
     // if(user.role=="faculty"){
      this.router.navigate(['/trainer-home']);*/
    //}
    //else
    //if(user.role=="student"){
     // this.router.navigate(['/student-home'])
    //}
    //else{
      //this.router.navigate(['/admin-home'])
    //}
    }/*,


     (err)=>{
      this.error=err.message;
      alert("Not approved by admin")



    })

  }*/
}
