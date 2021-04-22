import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class ShowDataComponent implements OnInit {
  data: any
  private req: any
  url: string = '/getData/'

  constructor(private http:HttpClient) { }

  ngOnInit() {
  	this.req = this.http.get(this.url).subscribe(data => {
      // console.log(data.json())
      console.log(data)
      // this.data = data.json() as [any]
      this.data = data as [any]
    })
  }

  ngOnDestroy(){
    this.req.unsubscribe()
  }

}
