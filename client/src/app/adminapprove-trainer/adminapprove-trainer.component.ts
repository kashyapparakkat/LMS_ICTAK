import { Component, inject, OnInit } from '@angular/core';
import { StudentdetailsService } from '../studentdetails.service';
import { ActivatedRoute,Router } from '@angular/router';
import { BatchandcourseService } from '../batchandcourse.service';

@Component({
  selector: 'app-adminapprove-trainer',
  templateUrl: './adminapprove-trainer.component.html',
  styleUrls: ['./adminapprove-trainer.component.css']
})
export class AdminapproveTrainerComponent implements OnInit {
  
  pageTitle="Tutor Details";
  tutordetails=[{
    id :'',
    name:'',
    email:'',
    password:'',
    number:'', 
    dob:'',
    subject :'',
    isEnrolled:''
   }] 

   batchdetails=[{
    id :'',
    batchname :'',
    description :'',
    status  :''
    
  }]
  constructor(public router:Router,public StudentdetailsService:StudentdetailsService,public BatchandcourseService:BatchandcourseService) { }
 //constructor() { }
  ngOnInit(): void {
  //  debugger;
   this.StudentdetailsService.gettutor().subscribe((data)=>{
     console.log('getdata',data)
      this.tutordetails=JSON.parse(JSON.stringify(data));
     //var datas= console.log('SDDSF',this.tutordetails)
  })

  this.BatchandcourseService.batchdetails().subscribe((data)=>{
    //console.log('getdata',data)
     this.batchdetails=JSON.parse(JSON.stringify(data));
})
}
/*approvetrainer(data:any){
  console.log("approving.........");
  this.StudentdetailsService.approvestudent(data);
  alert("Approved Succesfully");
  this.router.navigate(['/AdminapproveTrainer']);
}*/

deletetrainer(data:any){
  console.log("deleting",data);
  this.StudentdetailsService.deletestudent(data._id).subscribe(data=>
    {console.log(data)
      this.ngOnInit()
    });
    alert("Deleted Trainer "+ data.name +" Succesfully");
    this.router.navigate(['/AdminapproveTrainer']);
  
}

}

