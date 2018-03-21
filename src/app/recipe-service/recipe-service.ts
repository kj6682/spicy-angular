import {Injectable} from "@angular/core";
import {Recipe} from "./recipe";
import {testData} from "../data/mock-recipes";

@Injectable()
export class RecipeService{

    getAll(): Array<Recipe>{
        return testData.sort((r1: Recipe, r2: Recipe) => r2.datePublished < r1.datePublished ? -1 : 1);
    }
}