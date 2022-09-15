import { Component, OnInit } from '@angular/core';
import { Usermodel } from './users.model';
import { UserserviceService } from '../services/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facultyregistration',
  templateUrl: './facultyregistration.component.html',
  styleUrls: ['./facultyregistration.component.css']
})
export class FacultyregistrationComponent implements OnInit {

  title:String="Sign Up"
  confirmpwd:any;
  file:any;
 
    loginUser(item:any){
    alert("completed");

  }

  constructor(private userService:UserserviceService,private router:Router) { }
  userSingnup= new Usermodel("","","","","","","","","",0,false);
  
  ngOnInit(): void {
  }

  addUser()
  {
    this.userService.newUser(this.userSingnup);
    alert("Successfully Registered.please wait for approvel ");
    console.log(this.userSingnup);
    this.router.navigate(['']);
  }
  
}
