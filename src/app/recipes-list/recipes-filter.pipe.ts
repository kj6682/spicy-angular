import {Pipe, PipeTransform} from "@angular/core";
import {Recipe} from "../recipe-service/recipe";

@Pipe({name: "recipeFilter"})
export class RecipeFilterPipe implements PipeTransform {

    transform(list: Recipe[], filter: string): ReadonlyArray<Recipe> {
        if(!filter){
            return list
        } else
        return list.filter( (recipe) => (recipe.title.toUpperCase().indexOf(filter.toUpperCase()) !== -1));

    }

}