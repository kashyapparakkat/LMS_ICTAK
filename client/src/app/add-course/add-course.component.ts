import { Component, OnInit } from '@angular/core';
import { BatchandcourseService } from '../batchandcourse.service';
import { Router ,ActivatedRoute} from '@angular/router';
import { NgModel } from '@angular/forms';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

 

  constructor(public BatchandcourseService: BatchandcourseService,public router: Router,public route: ActivatedRoute) { }
  
  Courses={
    
    coursename :'',
    description :'',
    status      :'True'
  }

  ngOnInit(): void {

   
}
  addcourse()
  {
  //  console.log("Called",this.Courses); 
      this.BatchandcourseService.newCourse(this.Courses);
      alert("Course added Succesfully");
      this.Courses.coursename='';
      this.Courses.description='';
      this.Courses.status='';
      this.router.navigate(['./adminhome']);
      
 
  }
 
}
