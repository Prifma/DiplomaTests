import { HeroModel } from "src/models/HeroModel";
import { RecentMatchModel } from "src/models/RecentMatchModel";

export class TableBuilderService{
    private startNormalTable:string=`<table class="hero--table">
    <tr class="hero--row">
      <td class="hero--cell">Герой</td>
      <td class="hero--cell">У</td>
      <td class="hero--cell">С</td>
      <td class="hero--cell">П</td>
      <td class="hero--cell">ЗЦ</td>
      <td class="hero--cell">ОУ</td>
      <td class="hero--cell">Д</td>
      <td class="hero--cell">Шкода</td>
      <td class="hero--cell">ШБ</td>
      <td class="hero--cell">Предмети</td>
      <td class="hero--cell">НП</td>
    </tr>`;
    private startShortTable=`<table class="hero--table">
    <tr class="hero--row">
      <td class="hero--cell">Герой</td>
      <td class="hero--cell">У</td>
      <td class="hero--cell">С</td>
      <td class="hero--cell">П</td>
      <td class="hero--cell">ЗЦ</td>
      <td class="hero--cell">Шкода</td>
    </tr>`;
/*
    "<tr class='hero--row'>";
        result +=`<td class='hero--cell'><img class="hero-img" src="${model.imgUrl}" alt="${model.heroName}"></td>`; 
        result +=`<td class='hero--cell>${model.kills}</td>`;
        result +=`<td class='hero--cell>${model.deaths}</td>`;
        result +=`<td class='hero--cell>${model.assists}</td>`;
        result +=`<td class='hero--cell>${model.netWorth}</td>`;
        result +=`<td class='hero--cell>${model.heroDamage}</td>`;
        result += "</tr>";
*/

    private endTable:string=`</table>`
    
    matchSideTable(models:HeroModel[]){
        let result:string = this.startNormalTable;
        models.forEach(element =>{
            result += this.getNormalRow(element); 
        })
        result +=this.endTable;
        return result;
    }
    matchSideShortTable(models:HeroModel[]){
        let result:string = this.startShortTable;
        models.forEach(element =>{
            result += this.getShortRow(element); 
        })
        result +=this.endTable;
        return result;
    }

    private getNormalRow(model:HeroModel) {
        let result = "<tr class='hero--row'>";
        result +=`<td class="hero--cell"><img class="hero-img" src="${model.imgUrl}" alt="${model.heroName}"></td>`; 
        result +=`<td class="hero--cell">${model.kills}</td>`;
        result +=`<td class="hero--cell">${model.deaths}</td>`;
        result +=`<td class="hero--cell">${model.assists}</td>`;
        result +=`<td class="hero--cell">${model.netWorth}</td>`;
        result +=`<td class="hero--cell">${model.lastHits}</td>`;
        result +=`<td class="hero--cell">${model.denies}</td>`;
        result +=`<td class="hero--cell">${model.heroDamage}</td>`;
        result +=`<td class="hero--cell">${model.towerDamage}</td>`;
        result += this.getItems(model);
        result += "</tr>";
        return result;
    }

    private getShortRow(model:HeroModel) {
        let result = "<tr class='hero--row'>";
        result +=`<td class='hero--cell'><img class="hero-img" src="${model.imgUrl}" alt="${model.heroName}"></td>`; 
        result +=`<td class='hero--cell'>${model.kills}</td>`;
        result +=`<td class='hero--cell'>${model.deaths}</td>`;
        result +=`<td class='hero--cell'>${model.assists}</td>`;
        result +=`<td class='hero--cell'>${model.netWorth}</td>`;
        result +=`<td class='hero--cell'>${model.heroDamage}</td>`;
        result += "</tr>";
        return result;
    }
    private getItems(model:HeroModel){
        let result:string = "<th class='hero--cell'>";
        result +="<div class='hero-items'><div class='hero-normal-items'><div class='hero-main-items'>";
        model.mainItems.forEach(element => {
            if(element.id != "0")
                result+=`<img class="hero-item hero-main-item" src="${element.path}" alt="${element.name}">`;
        });
        result+= "</div><div class='hero-back-items'>";
        model.backPackItems.forEach(element =>{
            if(element.id != "0")
                result+=`<img class="hero-item hero-back-item" src="${element.path}" alt="${element.name}">`;
        })
        result += "</div></div></td>";
        if(model.neutralItem.id != "0")
            result+=`<th class='hero--cell'><img class="hero-item hero-neutral-item" src="${model.neutralItem.path}" alt="${model.neutralItem.name}">`;
        result+="</td>";
        return result;
    }
}