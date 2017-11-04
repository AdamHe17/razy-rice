import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DataServiceProvider} from "../../providers/data-service/data-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
