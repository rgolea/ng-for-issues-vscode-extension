import { Component } from '@angular/core';
import { NgForStandaloneExampleComponent } from './ng-for-standalone.component';
import { NgForImplicitLostModule } from './ng-for-implicit-lost/ng-for-implicit-lost.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgForStandaloneExampleComponent, NgForImplicitLostModule],
  template: `
    <ng-for-standalone></ng-for-standalone>
    <ng-for-implicit-lost></ng-for-implicit-lost>
  `
})
export class AppComponent {
}
