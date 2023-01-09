import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-for-implicit-lost',
  template: `
    <ul>
      <li *ngFor="let file of files">
        {{file.name}}
      </li>
    </ul>
  `
})

export class NgForImplicitLostExampleComponent {
  public files: File[] = [
    new File([], 'file1.txt'),
    new File([], 'file2.txt'),
  ];
}
