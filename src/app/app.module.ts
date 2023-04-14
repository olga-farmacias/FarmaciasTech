import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HamburgerMenuComponent } from './components/hamburger-menu/hamburger-menu.component';
import { BuyNowComponent } from './components/buy-now/buy-now.component';
import { MonitorizaTuMarcaComponent } from './components/monitoriza-tu-marca/monitoriza-tu-marca.component';
import { ADSComponent } from './components/ads/ads.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    HamburgerMenuComponent,
    BuyNowComponent,
    MonitorizaTuMarcaComponent,
    ADSComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
