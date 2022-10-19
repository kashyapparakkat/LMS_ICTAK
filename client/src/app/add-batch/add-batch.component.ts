import { Component, OnInit } from '@angular/core';
import { BatchandcourseService } from '../batchandcourse.service';
import { Router ,ActivatedRoute} from '@angular/router';
import { NgModel } from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-batch',
  templateUrl: './add-batch.component.html',
  styleUrls: ['./add-batch.component.css']
})
export class AddBatchComponent implements OnInit {

  coursedetails=[{
    id    :'',
    coursename :'',
    description :'',
    status  :''
    
  }]

  constructor(private BatchandcourseService: BatchandcourseService,private router: Router,private route: ActivatedRoute) { }

  batches={
    batchname :'',
    coursename    :'',
    description :'',
    status      :'True'
  }

  ngOnInit(): void {
    this.BatchandcourseService.coursedetails().subscribe((data)=>{
      //console.log('getdata',data)
       this.coursedetails=JSON.parse(JSON.stringify(data));
     // var datas= console.log('SDDSF',this.coursedetails)    
  })
  }

  addbatch()
  {
    console.log("hiiii",this.batches);
    this.BatchandcourseService.newBatch(this.batches);
      alert("Batch added Succesfully");
      this.batches.batchname='';
      this.batches.description='';
      this.batches.coursename ='';
      this.batches.status='';
      this.router.navigate(['./addbatch']);
  /*  this.BatchandcourseService.newBatch(this.Batches);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/']);*/
  }
}
