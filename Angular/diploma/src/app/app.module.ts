import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/app/compontnts/header/header.component';
import {  HttpClientModule } from '@angular/common/http';
import { AuthModule } from 'src/auth/auth.module';
import { DotaStatisticModule, LeaguesRoutes, StatisticRoutes } from 'src/dota-statistic/dota-statistic.module';
import { ComunityModule, ComunityRoutes } from 'src/comunity/comunity.module';
import { ModalService } from 'src/servisec/modal';
import { ModalComponent } from './compontnts/modal/modal.component';
import { ComunityComponent } from 'src/comunity/comunity-root/comunity-root.component';
import { StatisticRootComponent } from 'src/dota-statistic/statistic-root/statistic-root.component';
import { MainComponent } from './compontnts/main/main.component';
import { LeagueRootComponent } from 'src/dota-statistic/league-root/league-root.component';


const appRoutes: Routes =[
  { path: 'comunity', component: ComunityComponent, children: ComunityRoutes},
  { path: 'statistic', component: StatisticRootComponent, children:StatisticRoutes},
  { path: 'main', component: MainComponent},
  { path: 'leagues', component: LeagueRootComponent, children:LeaguesRoutes},
  { path: '**',  redirectTo: '/main' }
];

@NgModule({
  declarations: [
    AppComponent, HeaderComponent,ModalComponent,MainComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,AuthModule,DotaStatisticModule,ComunityModule,RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
