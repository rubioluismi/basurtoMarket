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

}
