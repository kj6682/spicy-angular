import {Injectable} from "@angular/core";
import {Recipe} from "./recipe";
import {testData} from "../data/mock-recipes";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/from";

@Injectable()
export class RecipeService{

    getAll(): Observable<Recipe> {
        return new Observable<Recipe>((observable) => {
            const sortedRecipes = testData.sort((r1: Recipe, r2: Recipe) => r2.datePublished < r1.datePublished ? -1 : 1);
            sortedRecipes.forEach(r => observable.next(r));
        })
    }
}
