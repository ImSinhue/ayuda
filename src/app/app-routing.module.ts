import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },

{ path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },



  { path: 'candidates', loadChildren: () => import('./modules/candidates/candidates.module').then(m => m.CandidatesModule), canActivate: [AuthGuard] },
  { path: 'review', loadChildren: () => import('./modules/review/review.module').then(m => m.ReviewModule), canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
