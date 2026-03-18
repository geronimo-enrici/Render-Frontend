import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Main } from './components/main/main';
import { MisRenders } from './components/mis-renders/misrenders';
import { Register} from './components/register/register';
import { authGuard } from './guards/auth';
import { Catalogo } from './components/catalogo/catalogo';

export const routes: Routes = [

 
  { path: 'login', component: Login },
  { path: 'register', component: Register },

  { path: 'main', component: Main },
  { path: 'misrenders', component: MisRenders, canActivate: [authGuard] },
  { path: 'catalogo', component: Catalogo, canActivate: [authGuard] },
  
  { path: '**', redirectTo: 'main' } 
];