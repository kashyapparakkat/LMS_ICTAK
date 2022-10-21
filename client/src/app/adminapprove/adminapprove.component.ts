import { Component, OnInit } from '@angular/core';
import { StudentdetailsService } from '../studentdetails.service';
import { ActivatedRoute,Router } from '@angular/router';
import { BatchandcourseService } from '../batchandcourse.service';

@Component({
  selector: 'app-adminapprove',
  templateUrl: './adminapprove.component.html',
  styleUrls: ['./adminapprove.component.css']
})
export class AdminapproveComponent implements OnInit {

  pageTitle="Student Details";
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

   batchdetails=[{
    id :'',
    batchname :'',
    description :'',
    status  :''

  }]
  constructor(public router:Router,public StudentdetailsService:StudentdetailsService,public BatchandcourseService:BatchandcourseService) { }
 //constructor() { }
  ngOnInit(): void {
   // let id = localStorage.getItem("editstudentid");
   this.StudentdetailsService.getStudents().subscribe((data)=>{
     console.log('getdata',data)
      this.studentDetails=JSON.parse(JSON.stringify(data));
     var datas= console.log('SDDSF',this.studentDetails)
  })

  this.BatchandcourseService.batchdetails().subscribe((data)=>{
    //console.log('getdata',data)
     this.batchdetails=JSON.parse(JSON.stringify(data));
   // var datas= console.log('SDDSF',this.coursedetails)
})
}
approvestudent(data:any){
  console.log("approving.........",data);
  //console.log("approving.........",data1);

 // localStorage.setItem("", this.data._id.toString());
  this.StudentdetailsService.approvestudent(data);
  alert("Approved Succesfully");
  this.router.navigate(['/adminapprove']);
}

deletestudnt(data:any){
 // console.log("deleting",data);
  this.StudentdetailsService.deletestudent(data._id).subscribe(data=>
    {
      console.log(data)

      //this.router.navigate(['/adminapprove']);
    this.ngOnInit()
    });
  alert("Deleted Student"+ data.name +"Succesfully");
  }
}
