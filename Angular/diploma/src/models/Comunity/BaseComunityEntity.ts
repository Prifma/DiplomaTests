import { Guid } from "guid-typescript";
import { ReactionType } from "./ReactionType";

export abstract class BaseComunityEntity{
    public id?:Guid;
    public body:string = "";
    public userId?:string = ""
    public likeCount:number=0;
    public disCount:number=0;
    public type:ReactionType = ReactionType.None;
}