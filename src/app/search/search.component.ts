import {Component, EventEmitter, Input, Output} from "@angular/core";
import {FormControl} from "@angular/forms";
import "rxjs/add/operator/debounceTime"
import "rxjs/add/operator/distinctUntilChanged"

@Component({
    selector: "recipe-search",
    template: `
        <div class="searchForm">
            <input type="text" [placeholder]="placeholder" [formControl]="searchControl"/>
        </div>
    `,
    inputs: ["placeholder"]

})
export class SearchComponent{

    searchControl = new FormControl();

    @Output()
    searchValueChange =  new EventEmitter<string>();

    constructor() {
        this.searchControl.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe((event) => this.searchValueChange.emit(event));
    }
}