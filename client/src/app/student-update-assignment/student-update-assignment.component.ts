import { Component, OnInit } from '@angular/core';
import {TrainersserviceService} from "../services/trainersservice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-update-assignment',
  templateUrl: './student-update-assignment.component.html',
  styleUrls: ['./student-update-assignment.component.css']
})
export class StudentUpdateAssignmentComponent implements OnInit {

  assign=
    { title:'',
      date:'',
      description:'',
      submissionText: '',
    }

  constructor(private trainerservice:TrainersserviceService,public router:Router) { }

  ngOnInit(): void {

    let bookId = localStorage.getItem("editBookId");
    this.trainerservice.getassignmentId(bookId).subscribe((data:any)=>{
      this.assign=JSON.parse(JSON.stringify(data));

    })

  }

  editAssign()
  {
    this.trainerservice.editStudentSubmissionText(this.assign);
    alert("Success");
    this.router.navigate(['getStudentAssignments']);
  }

}
