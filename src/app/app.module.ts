import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { EncounterComponent } from './encounter/encounter.component';
import { OptionComponent } from './option/option.component';
import { LocationComponent } from './location/location.component';
import { PlayerManagerComponent } from './player-manager/player-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    EncounterComponent,
    OptionComponent,
    LocationComponent,
    PlayerManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
