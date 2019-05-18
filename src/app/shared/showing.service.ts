import { Injectable } from '@angular/core';
import { Show } from './show.model';
import { preserveWhitespacesDefault } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ShowingService {

  showList:Show[] = [{what:'init',show:false}];
  constructor() {
    
   }

  addShow(what:string, show:boolean){
    let lookFor =  this.showList.find(x=> x.what == what);
    if (lookFor == null){
      this.showList.push({what:what,show:show});
    } else{
      this.updateShow(what,show);
    }
    return true;
  }

  updateShow(what:string,show:boolean){
    let itemIndex = this.showList.findIndex(x => x.what == what);
    this.showList[itemIndex] = ({what:what, show: show});
  }

  getShow(what:string){
    let lookFor = this.showList.find(x=> x.what ==what);
    return lookFor.show;
  }
}
