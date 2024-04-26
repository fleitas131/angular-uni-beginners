import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = {
    title: 'angular-beginners-course'
  };

  onLogoClicked() {
    alert('Notificacion');
  }

  onKeyUp(newTitle: string) {
    this.data.title = newTitle;
  }

}
