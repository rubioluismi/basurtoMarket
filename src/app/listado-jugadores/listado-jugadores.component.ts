import { ListadoJugadoresServicio } from './../servicios/listado-jugadores-servicio';
import { Jugadores } from './../modelo/jugadores.modelo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-jugadores',
  templateUrl: './listado-jugadores.component.html',
  styleUrls: ['./listado-jugadores.component.css'],
  providers: [ListadoJugadoresServicio]
})
export class ListadoJugadoresComponent implements OnInit {
  public status: string;
  public errores: string;
  public jugadores: Jugadores[];

  constructor(
    private _listadoJugadoresServicio: ListadoJugadoresServicio
  ) { }

  ngOnInit() {
    this.getListado();
    console.log('Carga el Compoenente Listado Bien');
  }
  getListado() {
    /* 	Llamamos al servicio, usamos subscribe para capturar todo, errores
			dentro diremos que ropas es result.data (JSON) y luego evaluamos
			el status, errores...
		*/
    this._listadoJugadoresServicio.getListado().subscribe(
      resultado => {  this.jugadores = resultado.data,
                      this.status = resultado.status;

      } // Cierre de resultado
      , error => { this.errores = <any>error;
        if (this.errores !== null) {
          console.log(this.errores);
          alert('Error de la Petición');
        }
      }// Cierre de error

    );
  }// Cierre de getListado
}
