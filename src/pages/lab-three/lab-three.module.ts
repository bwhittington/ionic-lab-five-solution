import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LabThreePage } from './lab-three';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    LabThreePage,
  ],
  imports: [
    IonicPageModule.forChild(LabThreePage),
    ComponentsModule
  ],
})
export class LabThreePageModule {}
