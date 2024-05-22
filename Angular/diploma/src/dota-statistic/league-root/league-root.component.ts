import { Component, Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AccInfo } from 'src/models/AccInfo';
import { League } from 'src/models/League';
import { LeagueDTO } from 'src/models/LeagueDTO';
import { ServerService } from 'src/servisec/server';

@Component({
  selector: 'league-root',
  templateUrl: './league-root.component.html',
  styleUrls: ['./league-root.component.css']
})
export class LeagueRootComponent {
  
}
