import {Component} from "@angular/core";

@Component({
    template: require('./add-review.component.html'),
    styles: [require("./add-review.component.scss")]
})
export class AddReviewComponent  {

    submitReview(v : any){
        console.log(v)
    }
}