import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Address } from './address';
import { CarouselService } from './carousel.service';
import {AngularFireStorage} from '@angular/fire/storage'
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  addressData= new Address();
  path!: String;

constructor(private carouselService: CarouselService, private angularFireStorage:AngularFireStorage){

}

  ngOnInit(): void {


  }
  myUploader(event: any) {
    console.log(event)
this.path = event.target.files[0]
this.angularFireStorage.upload("tinkufile"+Math.random()+this.path,this.path);
    // this.carouselService.saveAddress(this.addressData)
 }
}
