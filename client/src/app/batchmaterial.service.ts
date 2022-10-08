import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BatchmaterialService {

  server_address : string = 'http://localhost:3000/api'

  constructor(public http:HttpClient) { }

  viewbatchmaterial(){
    return this.http.get(`${this.server_address}/batchmaterial`)
  }
}
