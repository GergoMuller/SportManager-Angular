import { Component, OnInit, HostBinding} from '@angular/core';
import { slideInDownAnimation} from './animation';

@Component({
    selector: "titleComp",
    template: ` <h1 class="main-title"> SportManager </h1> `,
    animations: [ slideInDownAnimation],
})

export class TitleComponent{
    @HostBinding('@routeAnimation') routeAnimation = true;
    @HostBinding('style.display')   display = 'block';
    @HostBinding('style.position')  position = 'absolute';
}