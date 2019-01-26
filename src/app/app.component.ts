import { Component } from '@angular/core';
import * as bs from 'blockstack';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-blockstack';

  constructor() {
    
  }

  bsSignIn() {
    bs.redirectToSignIn();
  }
}
