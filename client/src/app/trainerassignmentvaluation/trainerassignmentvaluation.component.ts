import { Component, OnInit } from '@angular/core';
import {TrainersserviceService} from "../services/trainersservice.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-trainerassignmentvaluation',
  templateUrl: './trainerassignmentvaluation.component.html',
  styleUrls: ['./trainerassignmentvaluation.component.css']
})
export class TrainerassignmentvaluationComponent implements OnInit {
  titlename:String="Assignment List";
  assign=[
    {
      studentname:'',
      title :'',
      date:'',
      description:'',
      submissionText:'',
      mark:''

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
    this.router.navigate(['trainermarkupdate']);

  }

}
