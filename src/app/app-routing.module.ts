import { InsertarComponent } from './insertar/insertar.component';
import { ListadoJugadoresComponent } from './listado-jugadores/listado-jugadores.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/listado', pathMatch: 'full' },
  { path: '#', redirectTo: '/listado', pathMatch: 'full' },
  { path: 'home', redirectTo: '/listado', pathMatch: 'full' },
  { path: 'listado', component: ListadoJugadoresComponent },
  { path: 'insertar', component: InsertarComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
