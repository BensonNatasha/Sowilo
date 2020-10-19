import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiabetesmenuPage } from './diabetesmenu.page';

const routes: Routes = [
  {
    path: '',
    component: DiabetesmenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiabetesmenuPageRoutingModule {}
