import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LabFivePage } from './lab-five';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    LabFivePage,
  ],
  imports: [
    IonicPageModule.forChild(LabFivePage),
    ComponentsModule
  ],
})
export class LabFivePageModule {}
