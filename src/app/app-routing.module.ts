import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'registry',
    loadChildren: () => import('./registry/registry.module').then( m => m.RegistryPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'diabetesmenu',
    loadChildren: () => import('./diabetesmenu/diabetesmenu.module').then( m => m.DiabetesmenuPageModule)
  },
  {
    path: 'hypertensionmenu',
    loadChildren: () => import('./hypertensionmenu/hypertensionmenu.module').then( m => m.HypertensionmenuPageModule)
  },
  {
    path: 'pressure',
    loadChildren: () => import('./pressure/pressure.module').then( m => m.PressurePageModule)
  },
  {
    path: 'glycemic',
    loadChildren: () => import('./glycemic/glycemic.module').then( m => m.GlycemicPageModule)
  },
  {
    path: 'insuline',
    loadChildren: () => import('./insuline/insuline.module').then( m => m.InsulinePageModule)
  },
  {
    path: 'dorientation',
    loadChildren: () => import('./dorientation/dorientation.module').then( m => m.DorientationPageModule)
  },
  {
    path: 'phorientation',
    loadChildren: () => import('./phorientation/phorientation.module').then( m => m.PhorientationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
