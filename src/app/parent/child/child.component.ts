import { Component, ContentChild, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @ContentChild('paragraph')
  parentContentPara!: ElementRef;


  toggleColor: boolean = false;

  @Output()
  toggleColorEmitter = new EventEmitter<boolean>();

  emitToggleColor(toggleColor: boolean) {
    console.log(this.toggleColor);
    this.toggleColorEmitter.emit(this.toggleColor);
  }

  changeColor() {
    console.log(this.parentContentPara.nativeElement);
    this.toggleColor = !this.toggleColor;
    console.log(this.toggleColor);
    this.emitToggleColor(this.toggleColor);
  }


}
