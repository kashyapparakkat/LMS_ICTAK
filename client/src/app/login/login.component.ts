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

  loginResponse= {
    success: true,
    message: '',
    user: ''
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
      if(this.loginResponse.user=="student"){
        console.log("Inside student home navigation")
        this.router.navigate(['/student-home']);
      }
      else if(this.loginResponse.user=="teacher"){
        console.log("Inside trainer home navigation")
        this.router.navigate(['/trainer-home'])
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
