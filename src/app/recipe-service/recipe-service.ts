import {Injectable} from "@angular/core";
import {Recipe} from "./recipe";
import {testData} from "../data/mock-recipes";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/from";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class RecipeService{

    constructor(private http: HttpClient) { }

    getAll(titlePattern:string): Observable<Recipe[]> {
        let params = new HttpParams();
        params = params.set('sort', 'datePublished');
        if (titlePattern && titlePattern.length > 0) {
            params  = params.set("titlePattern", titlePattern)
        }
        return this.http.get("http://localhost:5000/api/recipes", {params: params}) as(Observable<Recipe[]>);
    }
}
