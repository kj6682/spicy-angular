import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector: "recipe-search",
    template: `
        <div class="searchForm">
            <input  #i (keyup)="textChanged(i.value)" type="text" [placeholder]="placeholder" />
        </div>
    `,
    inputs: ["placeholder"]

})
export class SearchComponent{


    @Output()
    searchValueChange =  new EventEmitter<string>();

    textChanged(value:string){
        this.searchValueChange.emit(value);
    }
}