import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@hotel-management-app/api-interfaces';

@Component({
  selector: 'hotel-management-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Hotel Management App';

  hidden = false;

  toggleBadgeVisibility(): boolean {
    return this.hidden = !this.hidden;
  }
}
