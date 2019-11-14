import {Component, Input} from '@angular/core';

@Component({
  selector: 'hello-app',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {
  title = 'angular-app';
  name = '';
  surname = 'Kowalski';
  onEnter(value: string) { this.name = value; }
}
