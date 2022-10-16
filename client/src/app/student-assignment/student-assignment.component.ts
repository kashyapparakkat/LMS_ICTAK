import { Component, OnInit } from '@angular/core';
import {TrainersserviceService} from "../services/trainersservice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-assignment',
  templateUrl: './student-assignment.component.html',
  styleUrls: ['./student-assignment.component.css']
})
export class StudentAssignmentComponent implements OnInit {
  titlename:String="Assignment List";
  assign=[
    {
      title :'',
      date:'',
      description:''
    }
  ]

  constructor(private trainerservice:TrainersserviceService,public router:Router) { }

  ngOnInit(): void {

    this.trainerservice.getAssignments().subscribe((data)=>{
      this.assign=JSON.parse(JSON.stringify(data));
      console.log(data)
    })

  }



  editAssign(assignment:any)



  {
    localStorage.setItem("editBookId", assignment._id.toString());
    this.router.navigate(['updateStudenAssignment']);

  }


  deleteAssign(assignment:any){
    this.trainerservice.deleteAssign(assignment._id)
      .subscribe((data) => {
        this.assign = this.assign.filter(p => p !== assignment);
      })



  }

}
