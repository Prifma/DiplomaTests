import { ItemModel } from "./ItemModel";

export class HeroModel{
    heroId?:string;
    heroName?:string;
    imgUrl?:string;
    accountId?:string;
    netWorth?:string;
    playerSlot?:string;
    mainItems:ItemModel[]=[];
    backPackItems:ItemModel[]=[];
    neutralItem:ItemModel = {};
    kills?:string;
    deaths?:string;
    assists?:string;
    goldPerMin?:string;
    expPerMin?:string;
    heroDamage?:string;
    lastHits?:string;
    denies?:string;
    level?:string;
    towerDamage?:string;
}