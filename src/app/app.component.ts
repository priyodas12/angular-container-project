import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-container-project';
  displayAngularTemplate: boolean = true;
  toggle: boolean = true;
  onToggle() {
    this.toggle = !this.toggle;
    this.displayAngularTemplate = !this.displayAngularTemplate;
  }
}
