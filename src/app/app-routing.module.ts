import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { BuyNowComponent } from './components/buy-now/buy-now.component';
import { MonitorizaTuMarcaComponent } from './components/monitoriza-tu-marca/monitoriza-tu-marca.component';
import { ADSComponent } from './components/ads/ads.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { AvisoLegalComponent } from './components/aviso-legal/aviso-legal.component';
import { PoliticaPrivacidadComponent } from './components/politica-privacidad/politica-privacidad.component';
import { CookiesComponent } from './components/cookies/cookies.component';

const routes: Routes = [
  {path: "", pathMatch: 'full', redirectTo: '/inicio'},
  {path: "inicio", component: InicioComponent},
  {path: "buy-now", component: BuyNowComponent},
  {path: "monitoriza-tu-marca", component: MonitorizaTuMarcaComponent},
  {path: "ads", component: ADSComponent},
  {path: "quienes-somos", component: QuienesSomosComponent},
  {path: "aviso-legal", component: AvisoLegalComponent},
  {path: "politica-de-privacidad", component: PoliticaPrivacidadComponent},
  {path: "cookies", component: CookiesComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
