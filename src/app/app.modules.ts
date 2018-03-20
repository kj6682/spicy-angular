import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from "@angular/core";
import {ToasterModule} from "angular2-toaster/angular2-toaster";
import {RecipesListComponent} from "./recipes-list/recipes-list.component";
import {RecipeFilterPipe} from "./recipes-list/recipes-filter.pipe";
import {routing} from "./app.routing";
import {AppComponent} from "./app.component";
import {AddReviewComponent} from "./reviews/add-review.component";
import {SearchComponent} from "./search/search.component";


@NgModule({
    imports:      [BrowserModule, FormsModule, ToasterModule, BrowserAnimationsModule, routing ],
    bootstrap:    [AppComponent],
    declarations: [AppComponent, RecipesListComponent, RecipeFilterPipe, AddReviewComponent, SearchComponent]
})
export class AppModule {}
