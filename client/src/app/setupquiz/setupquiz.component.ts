import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SetupquizService } from '../setupquiz.service';

@Component({
  selector: 'app-setupquiz',
  templateUrl: './setupquiz.component.html',
  styleUrls: ['./setupquiz.component.css']
})
export class SetupquizComponent implements OnInit {

  quiz:any
  quizzes={
    question:'',
    opt1:'',
    opt2:'',
    opt3:'',
    opt4:'',
    answer:''
  }

  constructor(public setupquizservice:SetupquizService,public router:ActivatedRoute,public router1:Router) { }

  ngOnInit(): void {
    this.setupquizservice.viewquiz().subscribe((data)=>{
      this.quiz=JSON.parse(JSON.stringify(data));
      console.log(this.quiz)
  })
}

addquiz_func(){
  this.setupquizservice.addquestion(this.quizzes).subscribe((res)=>{
    alert('question added')
    this.ngOnInit()
  })
    this.router1.navigate(['setup-quiz']);
}

deletequiz_func(id:string){
  if(confirm('Are you sure to delete this question')){
   this.setupquizservice.deletequestion(id).subscribe((res)=>{
    this.ngOnInit()
    alert('Deleted successfully')
   })
  }
}

}
