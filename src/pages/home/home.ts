import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';

import { MakingRicePage } from '../making-rice/making-rice';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  time: Date;
  cups: number;
  maxCups: number;
  timeDisplay: string;

  constructor(
    public navCtrl: NavController,
    private renderer2: Renderer2,
    public actionSheetCtrl: ActionSheetController
  ) {
    this.time = new Date();
    this.timeDisplay = new Date(this.time.getTime() - this.time.getTimezoneOffset() * 60000).toISOString();
    this.cups = 2;
    this.maxCups = 4;
  }

  makingRice() {
    this.navCtrl.push(MakingRicePage);
  }

  selectCups() {
    var buttons = [];
    const self = this;
    for (let i = 0; i < this.maxCups; i++) {
      buttons.push({
        text: i + 1,
        handler: () => {
          self.cups = i + 1;
        }
      })
    }

    let actionSheet = this.actionSheetCtrl.create({
      buttons: buttons
    });

    actionSheet.present();
  }

  riceTimeChange() {
    this.time = new Date(new Date(this.timeDisplay).getTime() + new Date().getTimezoneOffset() * 60000);
    this.time.setSeconds(0);
  }
}
