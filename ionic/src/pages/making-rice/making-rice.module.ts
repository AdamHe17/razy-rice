import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MakingRicePage } from './making-rice';

@NgModule({
  declarations: [
    MakingRicePage,
  ],
  imports: [
    IonicPageModule.forChild(MakingRicePage),
  ],
})
export class MakingRicePageModule {}
