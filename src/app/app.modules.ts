import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from "@angular/core";
import {ToasterModule} from "angular2-toaster/angular2-toaster";

@NgModule({
    imports:      [BrowserModule, FormsModule, ToasterModule, BrowserAnimationsModule ],
    bootstrap:    [],
    declarations: []
})
export class AppModule {}
