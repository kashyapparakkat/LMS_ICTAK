import { Component, OnInit } from '@angular/core';
import {TrainersserviceService} from "../services/trainersservice.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-trainerassignmentmarkupdate',
  templateUrl: './trainerassignmentmarkupdate.component.html',
  styleUrls: ['./trainerassignmentmarkupdate.component.css']
})
export class TrainerassignmentmarkupdateComponent implements OnInit {
  assign=
    { studentname:'',
      title:'',
      date:'',
      description:'',
      submissionText: '',
      mark:''
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
    this.trainerservice.edittrainerMarkupdte(this.assign);
    alert("Success");
    this.router.navigate(['assigmentevaluation']);
  }

}
