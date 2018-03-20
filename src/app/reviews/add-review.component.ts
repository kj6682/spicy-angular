import {Component} from "@angular/core";
import {ReviewImpl} from "../recipe-service/recipe";

@Component({
    template: require('./add-review.component.html'),
    styles: [require("./add-review.component.scss")]
})
export class AddReviewComponent  {

    review  = new ReviewImpl("",5,"",new Date());

    submitReview(){
        console.log("review",this.review)
    }

}