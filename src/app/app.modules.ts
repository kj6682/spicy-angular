import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from "@angular/core";
import {ToasterModule} from "angular2-toaster/angular2-toaster";
import {RecipesListComponent} from "./recipes-list/recipes-list.component";
import {RecipeFilterPipe} from "./recipes-list/recipes-filter.pipe";
import {routing} from "./app.routing";
import {AppComponent} from "./app.component";
import {AddReviewComponent} from "./reviews/add-review.component";
import {SearchComponent} from "./search/search.component";
import {RecipeService} from "./recipe-service/recipe-service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
    imports:      [BrowserModule, FormsModule, ToasterModule, BrowserAnimationsModule, routing, HttpClientModule, ReactiveFormsModule],
    bootstrap:    [AppComponent],
    declarations: [AppComponent, RecipesListComponent, RecipeFilterPipe, AddReviewComponent, SearchComponent]
})
export class AppModule {}
