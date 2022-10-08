import { Component, OnInit,ViewChild } from '@angular/core';
import { CoursematerialService } from '../coursematerial.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-trainer-courses-mean',
  templateUrl: './trainer-courses-mean.component.html',
  styleUrls: ['./trainer-courses-mean.component.css']
})

export class TrainerCoursesMeanComponent implements OnInit {
  material ={
    module:'',
    desc:'',
    video:'',
    resources:''
  }
materials:any
materialsupdate:any
idfetch:string=''

@ViewChild('updatematerial') form!: NgForm;


  constructor(public coursematerialservice:CoursematerialService,public router:ActivatedRoute,public router1:Router) { }

  ngOnInit(): void {
    this.coursematerialservice.viewmaterial().subscribe((data)=>{
      this.materials=JSON.parse(JSON.stringify(data));
      console.log(this.materials)
  })


     
}

getcurrentmaterial_func(id:string){
  this.idfetch=id;
  console.warn(id)
  this.coursematerialservice.getcurrentmaterial(id)
  .subscribe((result)=>{
   this.materialsupdate=JSON.parse(JSON.stringify(result));
   console.warn(this.materialsupdate)
   this.form.setValue({
     module:this.materialsupdate.ModuleName,
     desc:this.materialsupdate.ModuleDescription,
     video:this.materialsupdate.Video,
     resources:this.materialsupdate.Resources
   })
 })

}

  addmaterial_func(){
    console.warn('entered')
    this.coursematerialservice.addmaterial(this.material).subscribe((res)=>{
      alert('material added')
      this.ngOnInit()
    })
      this.router1.navigate(['trainer-mean']);
  }

  deletematerial_func(id:string){
    if(confirm('Are you sure to delete this module')){
     this.coursematerialservice.deletematerial(id).subscribe((res)=>{
      this.ngOnInit()
      alert('Deleted successfully')
     })
    }
  }

updatematerial_func(){
  console.warn(this.idfetch)
  this.coursematerialservice.updatematerial(this.idfetch,this.form.value).subscribe((result)=>{
    console.warn(result)
    alert('Course updated succesfully')
    this.ngOnInit()
  })
}

}
