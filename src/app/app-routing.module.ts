import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoggedInGuard } from './services/logged-in.guard';
import { UserService } from './services/user';

import { LoginComponent } from './+login/login.component';

import { SearchComponent } from './search/search.component';

import { TrendsComponent } from './trends/trends.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'authorized',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'authorized',
    loadChildren: './+authorized/authorized.module#AuthorizedModule',
    canActivate: [ LoggedInGuard ],
  },
   {
    path : 'trends',
    component : TrendsComponent
  }
  , {
    path : 'search',
    component : SearchComponent
  }
  , {
    path : 'search/:keyword',
    component : SearchComponent
  }, {
    path : 'search/:type/:keyword',
    component : SearchComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [ LoginComponent, TrendsComponent],
  exports: [RouterModule],
  providers: [ LoggedInGuard, UserService ],
})
export class AppRoutingModule { }
