import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facultyregistration',
  templateUrl: './facultyregistration.component.html',
  styleUrls: ['./facultyregistration.component.css']
})
export class FacultyregistrationComponent implements OnInit {
  //   user={
  //  password:'',
  //   pnum:'',
  //   email:'',
  //   fname:''
  // }
  // userVerify(){
  //   alert("successfullogin")

  // }
  mobNumberPattern = "/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/"; 
  loginUser(item:any){
    alert("completed");

  }

  constructor() { }

  ngOnInit(): void {
  }

}
