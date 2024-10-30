import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'set-up',
    loadChildren: () => import('./pages/set-up/set-up.module').then( m => m.SetUpPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'patrol',
    loadChildren: () => import('./pages/patrol/patrol.module').then( m => m.PatrolPageModule)
  },
  {
    path: 'panic',
    loadChildren: () => import('./pages/panic/panic.module').then( m => m.PanicPageModule)
  },
  {
    path: 'notif',
    loadChildren: () => import('./pages/notif/notif.module').then( m => m.NotifPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./pages/profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'warning',
    loadChildren: () => import('./pages/warning/warning.module').then( m => m.WarningPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
