import { Jugadores } from './../modelo/jugadores.modelo';
import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ListadoJugadoresServicio {
    constructor(private _http: HttpClient) {}

    getListado(): any {
        return this._http.get('http://localhost/api-rest/basurtoMarket-api.php/listado')
            .map((res: Response) => res);
    }

    getPosicion(): any {
        return this._http.get('http://localhost/api-rest/basurtoMarket-api.php/posiciones')
            .map((res: Response) => res);
    }

    setJugador(jugador: Jugadores) {
        const json = JSON.stringify(jugador);
        // const parametros = 'json=' + json;
        // const headers = new HttpHeaders();
        // headers.set('Content-Type', 'application/x-www-form-urlencoded');
        // headers.set('Accept', 'application/json');
        const headers = new HttpHeaders();
        headers.set('Content-Type', 'application/json');
        headers.set('Accept', 'application/json');
        return this._http.post('http://localhost/api-rest/basurtoMarket-api.php/nuevo',
        json, { headers: headers }).map(res => res);

    }

    onSubmit() {}

}
