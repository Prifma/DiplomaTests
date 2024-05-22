import { Component,EventEmitter,Input,Output } from '@angular/core';
import { AccInfo } from 'src/models/AccInfo';
import { Post } from 'src/models/Comunity/Post';
import { ServerService } from 'src/servisec/server';
import { AccImage, ImageSingleton } from 'src/singleton/ImageSingleton';


@Component({
    selector: 'comunity-post-preview',
    templateUrl: './comunity-post-preview.component.html',
    styleUrls: ['./comunity-post-preview.component.css']
})
export class ComunityPostPreviewComponent {
    @Input() set post(P:Post){
        this._post = P;
        let x = ImageSingleton.getAcc(this._post.userId!);
        if(!x){
            this.server.getUser(this._post!.userId!).subscribe({next:(data:any) => {
                this.Acc = data
                let a:AccImage = new AccImage(this._post!.userId!);
                a.imgUrl = data.imgUrl;
                ImageSingleton.addSome(a);
            }});
        }
        else{
            this.Acc = new AccInfo();
            this.Acc.imgUrl = x.imgUrl;
            this.Acc.id = x.id;
        }
    }
    _post?:Post;
    Acc?:AccInfo;
    constructor(private server:ServerService){}
    @Output() e = new EventEmitter<Post>();
    changePost(){
        this.e.emit(this._post);
    }
}
