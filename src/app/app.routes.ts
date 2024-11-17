import { Routes } from '@angular/router';
import { Home } from './pages/home/home.component';
import { Login } from './pages/login/login.component';
import { Register } from './pages/register/register.component';
import { DailyCard } from './pages/daily-card/daily-card.component';
import { Colleagues } from './pages/colleagues/colleagues.component';
import { Candidates } from './pages/candidates/candidates.component';
import { AddCandidate } from './pages/add-candidate/add-candidate.component';
import { Profile } from './pages/profile/profile.component';
import { Compatibility } from './pages/compatibility/compatibility.component';
import { Landing } from './pages/landing/landing.component';
import { Layout } from './layout/layout.component';

export const routes: Routes = [
  { path: 'landing', component: Landing },
  {
    path: '',
    component: Layout,
    children: [
      { path: 'home', component: Home },
      { path: 'login', component: Login },
      { path: 'register', component: Register },
      { path: 'daily-card', component: DailyCard },
      { path: 'colleagues', component: Colleagues },
      { path: 'candidates', component: Candidates },
      { path: 'candidates/add', component: AddCandidate },
      { path: 'profile', component: Profile },
      { path: 'compatibility', component: Compatibility },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
  { path: '**', redirectTo: 'landing' },
];
