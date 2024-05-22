
  import { Component, Input } from '@angular/core';
  import { AccInfo } from 'src/models/AccInfo';
  import { AccountSingleton } from 'src/singleton/AccountSingleton';

  @Component({
    selector: 'app-steam',
    templateUrl: './steam.component.html',
    styleUrls: ['./steam.component.css']
  })
  export class SteamComponent {
    @Input()
    acc?:AccInfo = new AccInfo();
    
  }
