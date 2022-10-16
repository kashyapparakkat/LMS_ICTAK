import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title:String="Login"
  //login(item:any){
   // alert("Login successfully")
  //}
  constructor(private userservice:UserserviceService, private router:Router) { }
  user={
    email:'',
    password:'',
    role:''
  }


  ngOnInit(): void {
  }
  login(){
    //alert("successful login");
    this.userservice.loginuser(this.user);
    console.log(this.user);
    console.log("role"+this.user.role);
    
  }
  //role(roleof:any){
    //if(roleof=="Faculty"){
    //  this.router.navigate(['/trainer-home'])
    //}else
    //if(roleof=="student"){
     // this.router.navigate(['/student-home'])
    //}
    //else{
    //  this.router.navigate(['/admin-home'])
    //}
  //}

}
