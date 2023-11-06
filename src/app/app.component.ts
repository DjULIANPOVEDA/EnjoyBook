import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from './services/user.service';
import { User } from './models/User';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  user: Observable<User | undefined>;
  constructor(
    private translateService: TranslateService,
    private userService: UserService
  ) {
    this.user = userService.getUser();
  }
  ngOnInit(): void {
    this.translateService.addLangs(['es', 'en']);
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
  }

  changeLang(): void {
    if (this.translateService.currentLang === 'en')
      this.translateService.use('es');
    else this.translateService.use('en');
  }
  logout(): void {
    this.userService.logout();
  }
}
