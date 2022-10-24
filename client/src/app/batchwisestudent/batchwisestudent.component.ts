import { Component, OnInit } from '@angular/core';
import { StudentdetailsService } from '../studentdetails.service';
import { ActivatedRoute,Router } from '@angular/router';
import { BatchandcourseService } from '../batchandcourse.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule  } from '@angular/core';



@Component({
  selector: 'app-batchwisestudent',
  templateUrl: './batchwisestudent.component.html',
  styleUrls: ['./batchwisestudent.component.css']
})
export class BatchwisestudentComponent implements OnInit {

  batchdetails=[{
    id :'',
    batchname :'',
    description :'',
    status  :''

  }]

  studentDetails=[{
    id :'',
    name:'',
    email:'',
    number:'',
    password:'',
    qualification:'',
    specialisation:'',
    isEnrolled:false,
    batch:'',
    gender:'',
    user:'',
    file:''
   }]

  selectedValue :any;
  changeBatch(e:any){
    console.log(e.target.value)
    this.selectedValue=e.target.value;
  }  
  
  constructor(public router:Router,public StudentdetailsService:StudentdetailsService,public BatchandcourseService:BatchandcourseService) { }

  ngOnInit(): void {
    
 
  this.BatchandcourseService.batchdetails().subscribe((data)=>{
  this.batchdetails=JSON.parse(JSON.stringify(data));
   
 })
 }
 viewbatchdetails(){
  console.log("hiiii");
  console.log(this.selectedValue);
  this.StudentdetailsService.getStudentsbtch(this.selectedValue).subscribe((data)=>{
    console.log('getdata',data)
     this.studentDetails=JSON.parse(JSON.stringify(data));
    var datas= console.log('SDDSF',this.studentDetails)
 })
  
 }
 displayName(data:any){

 }


}
