import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor( private firestore: AngularFirestore ) { }

  form = new FormGroup({
    bepis: new FormControl('sfdgsdf'),
  });

  writeArchive(data) {
    return new Promise<any>((resolve, reject) => {
        this.firestore
            .collection('archive')
            .add(data)
            .then(res => {}, err => reject(err));
    });
  }

  readArchive() {
    return this.firestore.collection('archive').snapshotChanges();
  }

  updateCoffeeOrder(data) {
    return this.firestore.collection('archive').doc(data.payload.doc.id).set({ bepis: 'asdfasdf' }, { merge: true });
  }

  updateBepis(data) {
    return this.firestore.collection('archive').doc(data.payload.doc.id).set({ bepis: 'a' }, { merge: true });
  }

  deleteCoffeeOrder(data) {
    return this.firestore.collection('archive').doc(data.payload.doc.id).delete();
 }
}
