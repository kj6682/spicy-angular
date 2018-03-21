import {Component, OnInit} from "@angular/core";
import {Recipe} from "../recipe-service/recipe";
import {RecipeService} from "../recipe-service/recipe-service";

@Component({
    styles: [ require("./recipes-list.component.scss") ],
    template: require("./recipes-list.component.html"),
    providers: [RecipeService]
})
export class RecipesListComponent implements OnInit{

    constructor(readonly service: RecipeService){}

    private recipes: Array<Recipe> = [];

    ngOnInit(){
        this.service.getAll().subscribe( (r:Recipe)=>{this.recipes.push(r)});
    }
}