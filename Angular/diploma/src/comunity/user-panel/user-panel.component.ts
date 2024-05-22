import { Component,EventEmitter,Input, Output } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { AccInfo } from 'src/models/AccInfo';
import { Post } from 'src/models/Comunity/Post';
import { UserType } from 'src/models/Comunity/UserType';
import { ServerService } from 'src/servisec/server';
import { AccountSingleton } from 'src/singleton/AccountSingleton';

@Component({
    selector: 'user-panel',
    templateUrl: './user-panel.component.html',
    styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent {
    @Input()
    id?:Guid;
   Delete(){
    this.server.deleteEntity(this.id!).subscribe();
    this.router.navigate([`comunity`]);
   }
   Change(){
    this.e.emit();
   }
   @Output() e = new EventEmitter()
   constructor(private server:ServerService, private router:Router){}
}
