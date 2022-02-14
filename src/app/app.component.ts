import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-calendar';

  @Input() date:string | undefined;
  @Output() dateChanged = new EventEmitter();

  saveDate(){
    this.dateChanged.emit(this.date);
  }
}
