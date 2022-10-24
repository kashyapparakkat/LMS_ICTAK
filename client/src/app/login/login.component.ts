import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  /*login(item:any) {
    alert("Login successfully")
  }*/

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

  loginResponse= {
    success: true,
    message: '',
    user: '',
    isEnrolled: true
  }


  ngOnInit(): void {
  }
  login(){
    console.log(this.user);
    console.log("role"+this.user.role);
    //alert("successful login");
    this.userservice.loginuser(this.user).subscribe((data)=>{
      this.loginResponse=JSON.parse(JSON.stringify(data))
      //console.log(this.loginResponse)
      console.log("this.loginResponse.user",this.loginResponse.user);
      console.log("this.loginResponse.success", this.loginResponse.success)
/*
      console.log("this.loginResponse.status", this.loginResponse.status)
*/
      /*if(this.loginResponse.success==true){
        console.log("Inside student home navigation")
        alert(this.loginResponse.message)
        //this.router.navigate(['/student-home']);
      }*/
      if(this.loginResponse.isEnrolled == false){
        console.log("Inside isEnrolled false")
        alert(this.loginResponse.message)
        //this.router.navigate(['']);
        window.location.reload()
      }
      if(this.loginResponse.isEnrolled && this.loginResponse.user=="student"){
        console.log("Inside student home navigation")
        this.router.navigate(['/student-home']);
      }
      else if(this.loginResponse.isEnrolled && this.loginResponse.user=="teacher"){
        console.log("Inside trainer home navigation")
        this.router.navigate(['/trainer-home'])
      } else if(this.loginResponse.user=="admin"){
        console.log("Inside admin home navigation")
        this.router.navigate(['/adminhome'])
      }
    },
      (err) => {

        //alert("  Email  already exists");
          alert("Username or password is not correct")
        // this.router.navigate(['']);

      });

      //else{
      //this.router.navigate(['/admin-home'])
      //}

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
