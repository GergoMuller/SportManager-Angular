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
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './components/app.title.component';
import { MainComponent } from './components/app.main.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'main', component: AppComponent},
      {path: 'title', component: TitleComponent},
      {path: '',  component: TitleComponent}
    ])
  ],
  declarations: [
    AppComponent,
    PlayerComponent,
    TeamComponent,
    TitleComponent,
    MainComponent
  ],
  bootstrap: [MainComponent],
  providers: [Configuration, PlayerService, TeamService, CommService]
})
export class AppModule { }
