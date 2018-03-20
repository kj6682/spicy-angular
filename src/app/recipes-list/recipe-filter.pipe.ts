import {PipeTransform} from "@angular/core";
import {Recipe} from "../recipe-service/recipe";

export class RecipeFilterPipe implements PipeTransform {

    transform(list: Recipe[], filter: string): ReadonlyArray<Recipe> {
        return list.filter( (recipe) => (recipe.title.indexOf(filter) !== -1));
    }

}