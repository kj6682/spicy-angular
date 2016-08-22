import {Injectable} from "@angular/core";
import {Recipe} from "./recipe";
import {testData} from "../data/mock-recipes";

@Injectable()
export class RecipeService {

    getAll(): Promise<Array<Recipe>> {
        return new Promise((resolve, reject) => {
            const sortedRecipes = testData.sort((r1: Recipe, r2: Recipe) => r2.datePublished < r1.datePublished ? -1 : 1);
            resolve(sortedRecipes)
        })

    }


}