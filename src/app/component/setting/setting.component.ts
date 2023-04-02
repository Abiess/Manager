import { Component } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
isDarkModeEnabled: any;

confirmPassword: any;
email: any;
user: any;
form: any;

cancel() {
  throw new Error('Method not implemented.');
  }
  saveSettings() {
  throw new Error('Method not implemented.');
  }

}
