import { Injectable } from '@angular/core';
import {AuthService} from "./auth.service";
import {AngularFirestore} from "@angular/fire/firestore";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private authService: AuthService, private firestore: AngularFirestore) { }

  getRole() {
    this.authService.authState$.pipe(map(state => {
        if (state !== null) {
          return state.email;
        }
        return '';
      }
      )
    ).subscribe(value => this.firestore.doc('permissions/' + value));
  }
}
