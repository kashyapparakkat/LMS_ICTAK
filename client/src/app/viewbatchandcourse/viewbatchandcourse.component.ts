import { Component, OnInit } from '@angular/core';
//import { StudentdetailsService } from '../studentdetails.service';
import { ActivatedRoute,Router } from '@angular/router';
import { BatchandcourseService } from '../batchandcourse.service';

@Component({
  selector: 'app-batchandcourse',
  templateUrl: './viewbatchandcourse.component.html',
  styleUrls: ['./viewbatchandcourse.component.css']
})
export class ViewbatchandcourseComponent implements OnInit {

  pageTitle="Student Details";
 
  batchdetails=[{
    batchname :'',
    coursename :'',
    description :'',
    status  :''

  }]
  coursedetails=[{
    coursename :'',
    description :''
    

  }]
  constructor(public router:Router,public BatchandcourseService:BatchandcourseService) { }
 //constructor() { }
  ngOnInit(): void {
   
  

  this.BatchandcourseService.batchdetails().subscribe((data)=>{
    //console.log('getdata',data)
     this.batchdetails=JSON.parse(JSON.stringify(data));
     console.log('getdata',data);
   // var datas= console.log('SDDSF',this.coursedetails)
})

this.BatchandcourseService.coursedetails().subscribe((data)=>{
  console.log('getdata',data)
   this.batchdetails=JSON.parse(JSON.stringify(data));
 // var datas= console.log('SDDSF',this.coursedetails)
})
}
}
