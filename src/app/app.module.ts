import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlayerManagerComponent } from './player-manager/player-manager.component';
import { MapComponent } from './map/map.component';
import { LocationComponent } from './location/location.component';
import { EncounterComponent } from './encounter/encounter.component';
import { OptionComponent } from './option/option.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    RouterModule.forRoot([
    ])
  ],
  declarations: [
    AppComponent,
    PlayerManagerComponent,
    LocationComponent,
    EncounterComponent,
    OptionComponent,
    MapComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/