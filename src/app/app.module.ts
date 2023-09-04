import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CookieService } from 'ngx-cookie-service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HamburgerMenuComponent } from './components/hamburger-menu/hamburger-menu.component';
import { BuyNowComponent } from './components/buy-now/buy-now.component';
import { MonitorizaTuMarcaComponent } from './components/monitoriza-tu-marca/monitoriza-tu-marca.component';
import { ADSComponent } from './components/ads/ads.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { AvisoLegalComponent } from './components/aviso-legal/aviso-legal.component';
import { PoliticaPrivacidadComponent } from './components/politica-privacidad/politica-privacidad.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { CookiesWarningComponent } from './components/cookies-warning/cookies-warning.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    HamburgerMenuComponent,
    BuyNowComponent,
    MonitorizaTuMarcaComponent,
    ADSComponent,
    QuienesSomosComponent,
    AvisoLegalComponent,
    PoliticaPrivacidadComponent,
    CookiesComponent,
    CookiesWarningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SlickCarouselModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
