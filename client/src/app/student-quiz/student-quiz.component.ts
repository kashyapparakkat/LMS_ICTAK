import { Component, OnInit } from '@angular/core';
import {SetupquizService} from "../setupquiz.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-student-quiz',
  templateUrl: './student-quiz.component.html',
  styleUrls: ['./student-quiz.component.css']
})
export class StudentQuizComponent implements OnInit {

  //quiz:any
  quizzes=[{
    _id:'',
    Question:'',
    Opt1:'',
    Opt2:'',
    Opt3:'',
    Opt4:'',
    Answer:'',
    StudentAnswer:''}]



  quiz1={
    id:'',
    question:'',
    opt1:'',
    opt2:'',
    opt3:'',
    opt4:'',
    answer:'',
    StudentAnswer:''
  }

  constructor(public setupquizservice:SetupquizService,public router:ActivatedRoute,public router1:Router) { }

  ngOnInit(): void {
    this.setupquizservice.viewquiz().subscribe((data)=>{
      this.quizzes=JSON.parse(JSON.stringify(data));
      console.log(this.quizzes)
    })
  }

  onSelect(event: any, id:string){
    console.log("inside On select==")
    this.quiz1.StudentAnswer=event.target.value
    this.quiz1.id=id
    console.log("Quiz value===",this.quiz1)
    this.setupquizservice.submitAnswerForQuestion(this.quiz1).subscribe((res)=>{
      console.log('answer submited')
    })
  }

  submitQuiz(){
    alert("Quiz is submited")
    this.router1.navigate(['student-home']);
  }
}
