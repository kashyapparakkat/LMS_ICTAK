import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainersserviceService } from '../services/trainersservice.service';

@Component({
  selector: 'app-addassignment',
  templateUrl: './addassignment.component.html',
  styleUrls: ['./addassignment.component.css']
})
export class AddassignmentComponent implements OnInit {
  //title:String="testing"

  assign=
   { title:'',
    date:'',
    description:''
   }

   constructor(public router:Router,public trainerService:TrainersserviceService) { }
   assignCreate(){

    
  
      this.trainerService.assignCreate(this.assign);
     this.router.navigate(['getassignments']);
     console.log(this.assign);
  

   }

 

  ngOnInit(): void {
  }

  

}
