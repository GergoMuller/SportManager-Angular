import { Component,HostBinding } from '@angular/core';
import { animate, AnimationEntryMetadata, state, style, transition, trigger } from '@angular/core';
import {slideInDownAnimation} from './components/animation'

@Component({
  selector: 'my-app',
  templateUrl: './app/htmls/appComponent.html',
  animations: [
    trigger('teamsAnim', [
    state('*',
      style({
        opacity: 1,
        transform: 'translateX(0)'
      })
    ),
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
      animate('0.5s ease-in')
    ]),
    transition(':leave', [
      animate('0.5s ease-out', style({
        opacity: 0,
        transform: 'translateY(100%)'
      }))
    ])
  ])
  ]
})
export class AppComponent {
  
}