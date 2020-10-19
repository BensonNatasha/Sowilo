import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DorientationPage } from './dorientation.page';

const routes: Routes = [
  {
    path: '',
    component: DorientationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DorientationPageRoutingModule {}
