import { Component,Input } from '@angular/core';
import { HttpClient,HttpParams} from '@angular/common/http';
import { AccInfo } from 'src/models/AccInfo';
import { ServerService } from 'src/servisec/server';
import { AccImage, ImageSingleton } from 'src/singleton/ImageSingleton';

@Component({
    selector: 'comunity-user',
    templateUrl: './comunity-user.component.html',
    styleUrls: ['./comunity-user.component.css']
})
export class ComunityUserComponent {
    @Input() set user(acc:string | undefined){
        let x = ImageSingleton.getAcc(acc!);
        if(!x)
        this.server.getUser(acc!).subscribe({next:(data:any)=> 
        {
            this.Acc = data
            let a:AccImage = new AccImage(acc!);
            a.imgUrl = data.imgUrl;
            ImageSingleton.addSome(a);
            if(this.Acc){
                this.userNotNull = true;
            }
            else this.userNotNull = false;
        }});
        else{
            this.Acc = new AccInfo();
            this.Acc.imgUrl = x.imgUrl;
            this.Acc.id = x.id;
            this.userNotNull = true;
        }
    }
    Acc?:AccInfo;
    userNotNull:boolean = false;
    constructor(private server:ServerService){}
}
