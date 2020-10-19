import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsulinePageRoutingModule } from './insuline-routing.module';

import { InsulinePage } from './insuline.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsulinePageRoutingModule
  ],
  declarations: [InsulinePage]
})
export class InsulinePageModule {}
