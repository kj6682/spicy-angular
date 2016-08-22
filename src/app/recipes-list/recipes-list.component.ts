import {Component, trigger, style, animate, transition, state, OnInit} from "@angular/core";

import {RecipeFilterPipe} from "./recipe-filter.pipe";
import {SearchComponent} from "../search/search.component";
import {RecipeService} from "../recipe-service/recipe-service";
import {Recipe} from "../recipe-service/recipe";

@Component({
    moduleId: module.id,
    selector: "spice-app",
    template: require("./recipes-list.component.html"),
    styles: [require("./recipes-list.component.scss")],
    directives : [SearchComponent],
    pipes: [RecipeFilterPipe],
    providers : [RecipeService]
})
export class RecipesListComponent implements OnInit {


    constructor(private recipeService : RecipeService) {
    }


    ngOnInit() {
        this.recipeService.getAll().then(r => this.recipes = r);
    }

    recipes  : Array<Recipe> = [];
    searchValue : string = "";

}
