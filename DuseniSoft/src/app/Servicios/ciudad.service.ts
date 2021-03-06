import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { City } from '../Modelo/City';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

   //Url = 'http://localhost:8081/';
  Url = 'http://3.14.74.92:8081/';

  constructor(private http:HttpClient) { }

  getCiudades() {
    return this.http.get<City[]>(this.Url+"allCities");
  }

  guardarCiudad(ciudad:City){
    return this.http.post<City>(this.Url+"addCity",ciudad);
  }


}
