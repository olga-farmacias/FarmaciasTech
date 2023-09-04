import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookies-warning',
  templateUrl: './cookies-warning.component.html',
  styleUrls: ['./cookies-warning.component.css']
})
export class CookiesWarningComponent {


  constructor( public cookieService: CookieService) {

  }

  dismiss(): void {
    this.cookieService.set('cookie-consent', 'true');
    this.hideCookieWarning();
  }

  private hideCookieWarning(): void {
    const cookieWarning = document.querySelector('.cookie-warning');
    if(cookieWarning) {
      cookieWarning.remove();
    }
  }

  ngOnInit() {
  }


}
