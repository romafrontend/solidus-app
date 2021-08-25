import {Component, ChangeDetectionStrategy} from '@angular/core';


@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [``],
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {}
