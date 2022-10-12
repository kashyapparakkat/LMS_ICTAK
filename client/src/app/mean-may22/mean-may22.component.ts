import { Component, OnInit,ViewChild } from '@angular/core';
import { BatchmaterialService } from '../batchmaterial.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mean-may22',
  templateUrl: './mean-may22.component.html',
  styleUrls: ['./mean-may22.component.css']
})
export class MeanMay22Component implements OnInit {
  materials:any
  bmaterials:any
  idfetch:any
  bmaterialsupdate:any
  opencourse:any

  @ViewChild('updatematerial') form!: NgForm;
  constructor(public batchmaterialservice:BatchmaterialService) { }

  ngOnInit(): void {

    this.batchmaterialservice.viewbatchmaterial().subscribe((data)=>{
      this.materials=JSON.parse(JSON.stringify(data))
      //console.log(this.materials)
    })
  }


  getcurrentmaterial_func(id:string){
    this.idfetch=id;
    //console.warn(id)

    this.batchmaterialservice.getcurrentmaterial(id)
    .subscribe((result)=>{
     this.bmaterialsupdate=JSON.parse(JSON.stringify(result));
     //console.warn(this.bmaterialsupdate)
     this.form.setValue({
       module:this.bmaterialsupdate.ModuleName,
       desc:this.bmaterialsupdate.ModuleDescription,
       video:this.bmaterialsupdate.Video,
       resources:this.bmaterialsupdate.Resources
     })
   })
  
  }

  updatebatchmaterial_func(){
    //console.warn(this.idfetch)
    console.log(this.form.value)
    this.batchmaterialservice.updatebatchmaterial(this.idfetch,this.form.value).subscribe((result)=>{
      //console.warn(result)
      alert('Course updated succesfully')
      this.ngOnInit()
    })
  }
  open_course(id:string){
    this.batchmaterialservice.getcurrentmaterial(id).subscribe((result)=>{
      this.bmaterialsupdate=JSON.parse(JSON.stringify(result));
      this.opencourse={
        module:this.bmaterialsupdate.ModuleName,
        desc:this.bmaterialsupdate.ModuleDescription,
        video:this.bmaterialsupdate.Video,
        resources:this.bmaterialsupdate.Resources,
        isopen:true
      }
      console.log(this.opencourse)
      this.batchmaterialservice.updatebatchmaterial(id,this.opencourse).subscribe((result)=>{
      //console.warn(result)
      alert('Course updated succesfully')
      this.ngOnInit()
      })
    })
  }

}
