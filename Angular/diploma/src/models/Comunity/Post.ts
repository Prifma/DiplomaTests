import { BaseComunityEntity } from "./BaseComunityEntity";
import { Comment } from "./Comment";

export class Post extends BaseComunityEntity{
    public title:string = "";
    public createdAt?:Date ;
    public comments:Comment[] = [];
    public commentsCount:number=0;
}