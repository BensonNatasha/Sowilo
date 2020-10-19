import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhorientationPage } from './phorientation.page';

const routes: Routes = [
  {
    path: '',
    component: PhorientationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhorientationPageRoutingModule {}
