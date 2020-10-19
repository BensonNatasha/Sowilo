import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsulinePage } from './insuline.page';

const routes: Routes = [
  {
    path: '',
    component: InsulinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsulinePageRoutingModule {}
