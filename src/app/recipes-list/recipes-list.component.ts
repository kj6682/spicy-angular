import {Component, OnInit} from "@angular/core";
import {Recipe} from "../recipe-service/recipe";
import {RecipeService} from "../recipe-service/recipe-service";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import "rxjs/add/operator/mergeMap"

@Component({
    styles: [ require("./recipes-list.component.scss") ],
    template: require("./recipes-list.component.html"),
    providers: [RecipeService]
})
export class RecipesListComponent{

    private recipes: Observable<Recipe[]>;

    searchStream = new Subject<string>();

    constructor(private recipeService: RecipeService ) {
        this.recipes= this.searchStream.flatMap((s) => this.recipeService.getAll(s))
    }
}