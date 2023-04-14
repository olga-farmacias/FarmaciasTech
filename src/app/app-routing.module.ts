import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { BuyNowComponent } from './components/buy-now/buy-now.component';
import { MonitorizaTuMarcaComponent } from './components/monitoriza-tu-marca/monitoriza-tu-marca.component';
import { ADSComponent } from './components/ads/ads.component';

const routes: Routes = [
  {path: "", pathMatch: 'full', redirectTo: '/inicio'},
  {path: "inicio", component: InicioComponent},
  {path: "buy-now", component: BuyNowComponent},
  {path: "monitoriza-tu-marca", component: MonitorizaTuMarcaComponent},
  {path: "ads", component: ADSComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
