import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  childToggleColor: boolean = false;

  onChildToggleColorChange(value: boolean) {
    console.log(value);
    this.childToggleColor = value;
  }
}
