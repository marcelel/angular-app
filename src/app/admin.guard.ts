import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";
import {map} from "rxjs/operators";
import {AngularFirestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private firestore: AngularFirestore) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> {
    return this.authService.authState$.pipe(map(state => {
        if (state !== null) {
          return state.email;
        }
        this.router.navigate(['/login']);
        return '';
      }))
      .lift(value => this.firestore.doc('permissions/' + value))
      .lift(value => value.get("role") === "ADMIN");
  }
}
