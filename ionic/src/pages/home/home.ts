import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { NavController, ActionSheetController } from 'ionic-angular';

import { MakingRicePage } from '../making-rice/making-rice';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  time: string;
  cups: number;
  maxCups: number;

  constructor(
    public navCtrl: NavController,
    private renderer2: Renderer2,
    public actionSheetCtrl: ActionSheetController
  ) {
    this.time = new Date().toISOString();
    this.cups = 1;
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
      title: 'How many cups?',
      buttons: buttons
    });

    actionSheet.present();
  }
}
