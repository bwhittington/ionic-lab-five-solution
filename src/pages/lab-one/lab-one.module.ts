import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LabOnePage } from './lab-one';

@NgModule({
  declarations: [
    LabOnePage,
  ],
  imports: [
    IonicPageModule.forChild(LabOnePage),
  ],
})
export class LabOnePageModule {}
