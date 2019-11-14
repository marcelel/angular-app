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
  tabliczka(array1: string[], array2: number[]): string {
    let result = '';
    for (let a of array1) {
      for (let b of array2) {
        result += a + b + ' ';
      }
    }
    return result;
  }
}
