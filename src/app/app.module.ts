import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { ResumenComponent } from './resumen/resumen.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RegistroComponent } from './registro/registro.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { PrincipalComponent } from './principal/principal.component';

const appRoutes: Routes =[
  {path:'', component: PrincipalComponent },
  {path:'registro', component: RegistroComponent },
  {path:'inicio/:name', component: InicioComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MensajesComponent,
    ResumenComponent,
    FooterComponent,
    HeaderComponent,
    RegistroComponent,
    HomeComponent,
    InicioComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
