import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LolComponent } from './lol/lol.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'lol', component: LolComponent },
];
