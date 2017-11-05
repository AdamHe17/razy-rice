import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-making-rice',
  templateUrl: 'making-rice.html',
})
export class MakingRicePage {

  dots: number;
  remainingTime: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dots = 0;
    this.remainingTime = 35;
  }

  ionViewDidLoad() {
    setInterval(() => {
      this.dots = (this.dots + 1) % 4;
    }, 600);

    var r = setInterval(() => {
      this.remainingTime--;
      if (this.remainingTime <= 0) {
        clearInterval(r);
      }
    }, 60000);
  }

}
