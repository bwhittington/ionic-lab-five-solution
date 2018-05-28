import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LabFourPage } from './lab-four';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    LabFourPage,
  ],
  imports: [
    IonicPageModule.forChild(LabFourPage),
    ComponentsModule
  ],
})
export class LabFourPageModule {}
