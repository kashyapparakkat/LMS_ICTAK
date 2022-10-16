import { Component, OnInit } from '@angular/core';
import {BatchmaterialService} from "../batchmaterial.service";

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {
  materials:any
  bmaterials:any

  constructor(public batchmaterialservice:BatchmaterialService) { }

  ngOnInit(): void {

    this.batchmaterialservice.viewbatchmaterial().subscribe((data)=>{
      this.materials=JSON.parse(JSON.stringify(data))
      console.log(this.materials)
    })
  }

}
