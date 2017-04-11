import { Component, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: "mainComp",
    templateUrl: "./app/htmls/main.html"
})
export class MainComponent{
    constructor(private router: Router) { }
}