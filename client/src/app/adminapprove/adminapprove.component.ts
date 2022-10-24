import { Component, OnInit } from '@angular/core';
import { StudentdetailsService } from '../studentdetails.service';
import { ActivatedRoute,Router } from '@angular/router';
import { BatchandcourseService } from '../batchandcourse.service';
import { AddBatchComponent } from '../add-batch/add-batch.component';

@Component({
  selector: 'app-adminapprove',
  templateUrl: './adminapprove.component.html',
  styleUrls: ['./adminapprove.component.css']
})
export class AdminapproveComponent implements OnInit {

  pageTitle="Student Details";
  studentDetails=[{
    _id:'',
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

  apprstdnt={id:'',
  selectedValue:''
}

  selectedValue :any;
  changeBatch(e:any){
    //console.log(e.target.value)
    this.selectedValue=e.target.value;
  }  
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
     this.batchdetails=JSON.parse(JSON.stringify(data));
})
}
approvestudent(id:string){
  this.apprstdnt.id=id;
  this.apprstdnt.selectedValue=this.selectedValue;
//  this.addbatch(id,);
  this.StudentdetailsService.approvestudent(this.apprstdnt).subscribe(data=>
    {
      console.log(data)
      this.ngOnInit()
    });
    alert("Approved Succesfully");
}

addbatch(data:any){
  //data=data+this.selectedValue;
  console.log("trying to print concatemation",data)
  this.StudentdetailsService.addbatchstudent(data,this.selectedValue).subscribe(data=>
    {
      console.log(data)
      this.ngOnInit()
    });
 // console.log(this.selectedValue);
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
