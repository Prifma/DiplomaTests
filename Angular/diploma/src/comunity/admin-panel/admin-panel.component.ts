import { Component,Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { AccInfo } from 'src/models/AccInfo';
import { Post } from 'src/models/Comunity/Post';
import { UserType } from 'src/models/Comunity/UserType';
import { ServerService } from 'src/servisec/server';
import { AccountSingleton } from 'src/singleton/AccountSingleton';

@Component({
    selector: 'admin-panel',
    templateUrl: './admin-panel.component.html',
    styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {
    @Input()
    entityId?:Guid
    @Input()
    userId?:string
    Delete(){
        if(AccountSingleton.getAcc()?.userType === UserType.Admin){
            this.server.deleteEntity(this.entityId!).subscribe();
            this.router.navigate([`comunity`]);
        }
    }
    Ban(){
        if(AccountSingleton.getAcc()?.userType === UserType.Admin){
            this.server.banUser(this.userId!).subscribe();
            this.router.navigate([`comunity`]);
        }
    }
    constructor(private server:ServerService,private router:Router){
        
    }
}
