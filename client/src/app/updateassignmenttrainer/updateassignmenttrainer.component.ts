import { Component, OnInit } from '@angular/core';
import { TrainersserviceService } from '../services/trainersservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-updateassignmenttrainer',
  templateUrl: './updateassignmenttrainer.component.html',
  styleUrls: ['./updateassignmenttrainer.component.css']
})
export class UpdateassignmenttrainerComponent implements OnInit {

  assign=
  { title:'',
   date:'',
   description:''
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
  this.trainerservice.editAssign(this.assign);   
  alert("Success");
  this.router.navigate(['getassignments']);
}

}