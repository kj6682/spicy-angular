import {Injectable} from "@angular/core";
import {Recipe} from "./recipe";
import {testData} from "../data/mock-recipes";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/from";

@Injectable()
export class RecipeService{

    getAll(): Observable<Recipe> {
        return Observable.from(testData);
    }
}
