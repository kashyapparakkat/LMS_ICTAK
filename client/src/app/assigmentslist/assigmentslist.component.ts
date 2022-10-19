import { Component, OnInit } from '@angular/core';
import { TrainersserviceService } from '../services/trainersservice.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-assigmentslist',
  templateUrl: './assigmentslist.component.html',
  styleUrls: ['./assigmentslist.component.css']
})
export class AssigmentslistComponent implements OnInit {
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
    this.router.navigate(['update']);

  }


  deleteAssign(assignment:any){
       this.trainerservice.deleteAssign(assignment._id)
      .subscribe((data) => {
        this.assign = this.assign.filter(p => p !== assignment);
      })
  
  

}
}
