import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './body/signIn/signIn.component';
import { HomeComponent } from './body/home/home.component';
import { AuthGuard } from './services/auth.guard';
import { InvalidUrlComponent } from './invalid-url/invalid-url.component';
import { SignOutMsgComponent } from './body/sign-out-msg/sign-out-msg.component';
import { NewsComponent } from './body/news/news.component';

const appRoutes: Routes = [
     { path: '', component: SignInComponent,},
    { path: 'signin', component: SignInComponent,},
    { path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
    { path: 'signOutMsg', component: SignOutMsgComponent },
    { path: 'news', component: NewsComponent },

    // { path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
    // {
    //   path: 'heroes',
    //   component: HeroListComponent,
    //   data: { title: 'Heroes List' }
    // },
    // { path: '',
    //   redirectTo: '/heroes',
    //   pathMatch: 'full'
    // },
     { path: '**', component: InvalidUrlComponent }
  ];

  export const routing = RouterModule.forRoot(appRoutes);