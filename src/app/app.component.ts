

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from './route_animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [fader]
})
export class AppComponent  {
  name = 'Dan';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}

