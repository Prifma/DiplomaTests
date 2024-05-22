import { Post } from "./Post";
import { SortingType } from "./SortingType";

export class Posts{
    public posts?:Post[];
    public page?:number;
    public pagesCount?:number;
    public pageSearch?:string;
    public pageSort?:SortingType;
}