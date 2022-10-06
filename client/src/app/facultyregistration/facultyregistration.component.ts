import { Component, OnInit } from '@angular/core';
//import { Usermodel } from './users.model';
import { UserserviceService } from '../services/userservice.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-facultyregistration',
  templateUrl: './facultyregistration.component.html',
  styleUrls: ['./facultyregistration.component.css']
})
export class FacultyregistrationComponent implements OnInit {

  title:String="Sign Up"
  confirmpwd:any;
  file:any;
  resume:any;
  emailname:any;
  
 
    loginUser(item:any){
    alert("completed");

  }

  constructor(private userService:UserserviceService,private router:Router,public http:HttpClient) { }

   userSingnup={

     name:'',
     email:'',
     usename:'',
     password:'',
     user:'teacher',
     id:'',
     dob:'',
      subject:'',
     qualification:'',
     specialisation:'',
     number:'',
     isEnrolled:false,
     gender:''


  }
  
  ngOnInit(): void {
  }


  selectResume(event:any){
    if(event.target.files.length>0){
      const file=event.target.files[0];
      this.resume=file;
    }

  }
  

  emailValid(){
   // this.userSingnup.email=this.emailname;
  console.log(this.userSingnup.email);
  this.emailname=this.userSingnup.email;
  
  console.log(this.emailname)
  return this.http.get('http://localhost:3000/api/validate',this.emailname)
  .subscribe((res) => {
   alert("Valid email ");
    //this.router.navigate(['login']);
}, (err) => {
   
    alert("  Email  already exists");
   // this.router.navigate(['']);
    
});


  }

  addUser()
  {
      const formdata=new FormData();
      formdata.append('file',this.resume);
      this.http.post('http://localhost:3000/file',formdata).subscribe((res)=>console.log(res),(err)=>console.log(err))


    this.userService.newUser(this.userSingnup);
    this.router.navigate(['']);
  }
  
}
