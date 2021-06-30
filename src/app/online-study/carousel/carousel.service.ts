import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore'
import { Address } from './address';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(private angularFirestore: AngularFirestore) { }
  saveAddress(address: Address){
    console.log("from service class")
    console.log(address);
    this.angularFirestore.collection("angular_project").add({...address})

      }
}
