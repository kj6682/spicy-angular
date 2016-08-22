export interface Review {
    rate:number;
    name:string;
    email:string;
    submitted:Date;
    text:string;
}

export interface Recipe {
    ingredients:string[];
    url:string;
    image:string;
    datePublished:any;
    source:string;
    prepTime:string;
    description:string;
    id:string;
    title:string;
    difficulty:number;
    reviews:Review[];
    totalTime:string;
    recipeYield:string;
    cookTime:string;
}


