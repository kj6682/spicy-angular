import {Component} from "@angular/core";
import {testData} from "../data/mock-recipes";
import {Recipe} from "../recipe-service/recipe";

@Component({
    selector: "spice-app",
    styles: [ require("./recipes-list.component.scss") ],
    template: require("./recipes-list.component.html")})
export class RecipesListComponent {
    recipes = testData.sort((r1: Recipe, r2: Recipe) => r2.datePublished < r1.datePublished ? -1 : 1);

    myFilter: string;

    onKey(value: string) {
        this.myFilter += "" + value;
    }
}