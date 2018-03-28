import { Posicion } from './../modelo/posicion.modelo';
import { ListadoJugadoresServicio } from './../servicios/listado-jugadores-servicio';
import { Jugadores } from './../modelo/jugadores.modelo';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-insertar',
  styleUrls: ['./insertar.component.css'],
  templateUrl: './insertar.component.html'
})

export class InsertarComponent implements OnInit {
  public status: string;
  public errores: string;
  public validacion: string[];
  public jugadores: Jugadores;
  public posicion: Posicion[];
  public error: string;

  constructor(
    private _listadoJugadoresServicio: ListadoJugadoresServicio
  ) { }

  ngOnInit() {
    this.mostrarOcultarTituloAvtivo();
    this.jugadores = new Jugadores(0, '', '', '', '', '');
    this.getposiciones();
  }

  onSubmit() {

      this._listadoJugadoresServicio.setJugador(this.jugadores).subscribe(
        (response: any) => {
          // Se resuelve la promesa
          console.log(response.message);
          (<any>$('#nuevoJForm')).reset();
        },
        (error) => { // Función de fallo en la petición
          // console.log(<any>error);
          console.log(error.message);
        });
  }

  mostrarOcultarTituloAvtivo() {
    $('.listado li').removeClass('active');
    $('.insertar').addClass('active');
  }

  getposiciones() {
    /* 	Llamamos al servicio, usamos subscribe para capturar todo, errores
			dentro diremos que ropas es result.data (JSON) y luego evaluamos
			el status, errores...
		*/
    this._listadoJugadoresServicio.getPosicion().subscribe(
      resultado => {  this.posicion = resultado.data,
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
