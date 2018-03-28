import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as $ from 'jquery';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListadoJugadoresComponent } from './listado-jugadores/listado-jugadores.component';
import { ListadoJugadoresServicio } from './servicios/listado-jugadores-servicio';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { InsertarComponent } from './insertar/insertar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    ListadoJugadoresComponent,
    FooterComponent,
    InsertarComponent,
    HomeComponent
  ],
  providers: [ListadoJugadoresServicio],
  bootstrap: [AppComponent]
})
export class AppModule { }
