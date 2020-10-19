import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GlycemicPageRoutingModule } from './glycemic-routing.module';

import { GlycemicPage } from './glycemic.page';
import {NgCalendarModule} from 'ionic2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GlycemicPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [GlycemicPage]
})
export class GlycemicPageModule {}
