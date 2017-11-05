import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-making-rice',
  templateUrl: 'making-rice.html',
})
export class MakingRicePage {

  dots: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dots = 0;
  }

  ionViewDidLoad() {
    setInterval(() => {
      this.dots = (this.dots + 1) % 4;
    }, 600);
  }

}
