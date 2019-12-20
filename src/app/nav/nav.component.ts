import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {AuthService} from "../auth.service";
import {AuthorizationService} from "../authorization.service";
import {AngularFirestore} from "@angular/fire/firestore";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  isAdmin: boolean;

  ngOnInit(): void {
    this.checkIsAdmin();
  }

  constructor(private breakpointObserver: BreakpointObserver,
              private authService: AuthService,
              private firestore: AngularFirestore) {}

  checkIsAdmin() {
    this.authService.authState$.pipe(map(state => {
        if (state !== null) {
          this.firestore.doc('permissions/' + state.email)
            .get()
            .subscribe(value => this.isAdmin = value.get("role") === "ADMIN");
        }
        this.isAdmin = false;
      }
      )
    ).subscribe(value => value);
  }
}
