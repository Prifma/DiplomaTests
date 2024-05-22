import { ItemModel } from "./ItemModel";

export class HeroItems{
    public heroId?:number;
    public name?:string;
    public imageUrl?:string;
    public start?:ItemModel[];
    public early?:ItemModel[];
    public mid?:ItemModel[];
    public late?:ItemModel[];
    public error?:boolean;
}