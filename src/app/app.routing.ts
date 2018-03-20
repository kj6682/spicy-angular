import {Routes, RouterModule} from "@angular/router";
import {RecipesListComponent} from "./recipes-list/recipes-list.component";

const routes: Routes = [
    {
        path: 'recipe-list',
        component: RecipesListComponent
    },
    {
        path: '',
        redirectTo: '/recipe-list',
        pathMatch: 'full'
    }
];

export const routing = RouterModule.forRoot(routes);