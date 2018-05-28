import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { LabOnePage } from '../lab-one/lab-one';
import { LabTwoPage } from '../lab-two/lab-two';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navigateTo(page: any){
    this.navCtrl.push(page);
  }
}
