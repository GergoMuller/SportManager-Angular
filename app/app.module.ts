import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { PlayerComponent } from './components/app.player.component';
import { TeamComponent } from './components/app.team.component';
import { Configuration } from './app.constants';
import { Http} from '@angular/http';
import {HttpModule} from '@angular/http';
import {PlayerService} from './services/PlayerDataService';
import {TeamService} from './services/TeamDataService';
import {CommService} from './services/CommService';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    AppComponent,
    PlayerComponent,
    TeamComponent
  ],
  bootstrap: [ AppComponent, PlayerComponent, TeamComponent],
  providers: [Configuration, PlayerService, TeamService, CommService]
})
export class AppModule { }
