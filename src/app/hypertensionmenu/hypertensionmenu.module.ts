import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HypertensionmenuPageRoutingModule } from './hypertensionmenu-routing.module';

import { HypertensionmenuPage } from './hypertensionmenu.page';
import {NgCalendarModule} from 'ionic2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HypertensionmenuPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [HypertensionmenuPage]
})
export class HypertensionmenuPageModule {}
