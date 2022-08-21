import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameSessionService {

  constructor(private firestore: AngularFirestore) { }
  form = new FormGroup({        
      gameSession: new FormControl('')
  })

  getGameSession(): Observable<any> {
    return this.firestore.collection("gameSessions").snapshotChanges();
  }

  
  createGameSession(data) {
    console.log("CREATING GAME SESSION: ", data);
    return new Promise<any>((resolve, reject) =>{
        this.firestore
            .collection("gameSessions")
            .add(data)
            .then(res => {}, err => reject(err));
    });
  }
}