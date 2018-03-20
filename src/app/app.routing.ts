import {Routes, RouterModule} from "@angular/router";
import {RecipesListComponent} from "./recipes-list/recipes-list.component";
import {AddReviewComponent} from "./reviews/add-review.component";

const routes: Routes = [
    {
        path: 'recipe-list',
        component: RecipesListComponent
    },
    {
        path: 'review/add',
        component: AddReviewComponent
    },
    {
        path: '',
        redirectTo: '/recipe-list',
        pathMatch: 'full'
    }
];

export const routing = RouterModule.forRoot(routes);