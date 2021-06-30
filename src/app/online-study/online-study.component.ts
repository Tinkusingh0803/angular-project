import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { FilterService } from "primeng/api";


interface headerInterface {
homeheader: hearders[];

}
interface hearders{
  home: string
  video: string
  blog: string
  contact: string
}

@Component({
  selector: 'app-online-study',
  templateUrl: './online-study.component.html',
  styleUrls: ['./online-study.component.css'],
  providers: [FilterService]

})
export class OnlineStudyComponent implements OnInit {

  valueIconRight: any;
   constructor(private primengConfig: PrimeNGConfig) {

  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  hearders={
   homeheader:[
     {
    "home": 'Home',
    "video": 'Videos',
    "blog": 'Blog',
    "contact": 'Contact Me',
    "uploadImage": 'Upload-Image'
     }
    ]
  }



}
