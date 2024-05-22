import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionPanelComponent } from './option-panel/option-panel.component';
import { FormsModule } from '@angular/forms';
import { ServerService } from 'src/servisec/server';
import { DotaSideComponent } from './dota-side/dota-side.component';
import { StatisticRootComponent } from './statistic-root/statistic-root.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ProfileRecentComponent } from './profile-recent/profile-recent.component';
import { ProfileTotalsComponent } from './profile-totals/profile-totals.component';
import { ResultComponent } from './result/result.component';
import { DotaMatchComponent } from './dota-match/dota-match.component';
import { TableBuilderService } from 'src/servisec/tables';
import { LoadComponent } from 'src/app/compontnts/load/load.component';
import { HeroTrendsComponent } from './hero-trends/hero-trends.component';
import { RouterModule, Routes } from '@angular/router';
import { HeroPickComponent } from './hore-pick/hero-pick.component';
import { LeaguesComponent } from './leagues/leagues.component';
import { MatchesComponent } from './matches/matches.component';
import { LeagueRootComponent } from './league-root/league-root.component';
import { TeamComponent } from './matches/team/team.component';

export const StatisticRoutes:Routes = [
  {
      path:"match/:id",
      component: DotaMatchComponent,
      
  },
  {
      path:"player/:id",
      component:ProfileComponent
  },
  {
    path:"hero",
    component:HeroPickComponent
  }
  ,
  {
    path:"hero/:id",
    component:HeroTrendsComponent
  }
]
export const LeaguesRoutes:Routes = [
  {
    path:"matches/:id",
    component: MatchesComponent
  },
  {
    path:"",
    component: LeaguesComponent
  }
]

@NgModule({
  declarations: [OptionPanelComponent,
                DotaMatchComponent,
                DotaSideComponent, 
                StatisticRootComponent, 
                ProfileComponent,
                ProfileInfoComponent,
                ProfileRecentComponent,
                ProfileTotalsComponent,
                ResultComponent,
                LoadComponent,
                HeroTrendsComponent,
                HeroPickComponent,
                LeaguesComponent,
                MatchesComponent,
                LeagueRootComponent,
                TeamComponent],
  imports: [
    CommonModule, FormsModule,RouterModule.forRoot(StatisticRoutes)
  ],
  exports:[StatisticRootComponent, LeagueRootComponent,MatchesComponent],
  providers:[ServerService,TableBuilderService]
})
export class DotaStatisticModule { }
