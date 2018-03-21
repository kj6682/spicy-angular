import {Component, OnInit} from "@angular/core";
import {Recipe} from "../recipe-service/recipe";
import {RecipeService} from "../recipe-service/recipe-service";
import {Observable} from "rxjs/Observable";

@Component({
    styles: [ require("./recipes-list.component.scss") ],
    template: require("./recipes-list.component.html"),
    providers: [RecipeService]
})
export class RecipesListComponent implements OnInit{

    constructor(readonly service: RecipeService){}

    private recipes: Observable<Recipe[]>

    ngOnInit(){
        this.search(null);
    }

    private search(s: string){
        this.recipes = this.service.getAll(s);
    }
}