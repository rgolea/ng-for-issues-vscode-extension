import { NgFor } from '@angular/common';
import { Component } from '@angular/core';



@Component({
  selector: 'ng-for-standalone',
  standalone: true,
  imports: [NgFor],
  template: `
  <ul>
    <li *ngFor="let name of names">
      {{name}}
    </li>
  </ul>
  `
})
export class NgForStandaloneExampleComponent {
  public names = ['John', 'Jane', 'Bob'];
}
