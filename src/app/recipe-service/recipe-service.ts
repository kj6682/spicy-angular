import {Injectable} from "@angular/core";
import {Recipe} from "./recipe";
import {testData} from "../data/mock-recipes";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/from";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable()
export class RecipeService{

    constructor(private http: HttpClient) { }

    getAll(): Observable<Recipe[]> {
        let params = new HttpParams();
        params = params.set('sort', 'datePublished')
        return this.http.get("http://localhost:5000/api/recipes", {params: params}) as(Observable<Recipe[]>);
    }
}
