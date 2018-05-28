import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LabTwoPage } from './lab-two';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    LabTwoPage,
  ],
  imports: [
    IonicPageModule.forChild(LabTwoPage),
    ComponentsModule
  ],
})
export class LabTwoPageModule {}
