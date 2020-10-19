import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiabetesmenuPageRoutingModule } from './diabetesmenu-routing.module';

import { DiabetesmenuPage } from './diabetesmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiabetesmenuPageRoutingModule
  ],
  declarations: [DiabetesmenuPage]
})
export class DiabetesmenuPageModule {}
