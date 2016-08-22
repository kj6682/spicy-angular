import {Component, Output, EventEmitter, Input} from "@angular/core";

@Component({
    selector : "recipe-search",
    inputs : ["placeholder"],
    template : `
      <div class="searchForm">
        <input type="text" #search [placeholder]="placeholder" (keyup)="updateValue(search.value)"/>
      </div>
    `


})
export class SearchComponent {
    @Output()
    searchValueChange = new EventEmitter<String>();

    updateValue(s : string) {
        this.searchValueChange.emit(s)
    }
}
