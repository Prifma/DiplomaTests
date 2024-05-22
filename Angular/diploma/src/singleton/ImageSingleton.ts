import { HttpClient } from "@angular/common/http";
import { ServerService } from "src/servisec/server";

export class ImageSingleton{
    private static instance:ImageSingleton;

    private accs:AccImage[] = [];
    
    constructor(private server:ServerService) {
    }
    public static setInstance(server:ServerService){
        this.instance = new ImageSingleton(server);
        
    }
    public static getAcc(id:string){
        return this.instance.accs?.find(l=>l.id===id);
    }
    public static addSome(AccImage:AccImage){
        this.instance.accs?.push(AccImage);
    }
    
}
export class AccImage{
    public id?:string;
    public imgUrl?:string;
    public stage:ImageStage = ImageStage.Comming;
    constructor(id:string){
        this.id = id;
    }
}
export enum ImageStage{
    Comming,Come
}