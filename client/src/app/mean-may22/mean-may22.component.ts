import { Component, OnInit } from '@angular/core';
import { BatchmaterialService } from '../batchmaterial.service';

@Component({
  selector: 'app-mean-may22',
  templateUrl: './mean-may22.component.html',
  styleUrls: ['./mean-may22.component.css']
})
export class MeanMay22Component implements OnInit {
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
