import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class GameSessionService {

  constructor(private firestore: AngularFirestore) { }
  form = new FormGroup({        
      gameSession: new FormControl('')
  })

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