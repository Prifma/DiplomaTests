import { Guid } from "guid-typescript";
import { ReactionType } from "./ReactionType";
import { BaseComunityEntity } from "./BaseComunityEntity";
export class Reaction{
    public Id?:Guid;
    public EntityId!:Guid;
    public Entity?:BaseComunityEntity;
    public UserId?:string;
    public Type:ReactionType = ReactionType.None;
}