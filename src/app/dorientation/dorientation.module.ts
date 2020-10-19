import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DorientationPageRoutingModule } from './dorientation-routing.module';

import { DorientationPage } from './dorientation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DorientationPageRoutingModule
  ],
  declarations: [DorientationPage]
})
export class DorientationPageModule {}
