import { BaseComunityEntity } from "./BaseComunityEntity";
import { Post } from "./Post";
import { Guid } from "guid-typescript";

export class Comment extends BaseComunityEntity{
    public parentPost?:Post;
    public parentPostId?:Guid;
    public parent?:Comment;
    public parentId?:Guid;
}