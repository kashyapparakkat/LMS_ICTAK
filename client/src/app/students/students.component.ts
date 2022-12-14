import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
//import { Usermodel } from '../facultyregistration/users.model';
import { UserserviceService } from '../services/userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {



    title:String="Sign Up"

    //mobNumberPattern = "/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/";
    loginUser(item:any){
      alert("completed");

    }

    constructor(private userService:UserserviceService,private router:Router) { }
    //userSingnup= new Usermodel("","","","","","","","","",0,false);
    selected:String="Other";
    userSingnup={

      name:'',
      email:'',
      usename:'',
      password:'',
       user:'student',
      id:'',
      dob:'',
       subject:'',
      qualification:this.selected,
      specialisation:'',
      number:'',
      isEnrolled:false,
      gender:''

   }

  courses=[{
    id:1,name:"B.tech"
  },
  {
    id:2,name:"MCA"
  },{
    id:3,name:"M.tech"
  },
  {
    id:4,name:"Other"
  }
]




    ngOnInit(): void {
    }

    addUser()
    {
      this.userService.newUser(this.userSingnup);
      this.router.navigate(['']);
    }


  }
