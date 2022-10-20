import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BatchmaterialService {

  //server_Address : string = 'http://localhost:3000/api'
  server_Address: String = ""

  constructor(public http:HttpClient) { }

  viewbatchmaterial(){
    return this.http.get(`${this.server_Address}/batchmaterial`)
  }

  getcurrentmaterial(id:any){
    return this.http.get(`${this.server_Address}/batchmaterial/${id}`)
    }
  updatebatchmaterial(id:any,data:any){
      console.log(`batch data ${data}`)
      return this.http.patch(`${this.server_Address}/batchmaterial/${id}`,data)
     }

  deletematerial(id:any){
      return this.http.delete(`${this.server_Address}/batchmaterial/${id}`)
    }

}
