import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Usuario} from '../modelos/usuario';
import { Observable } from 'rxjs';
import { Producto } from '../modelos/producto';
@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  public URL_USER="https://dummyjson.com/users/add";
  public urlProducts=" 'https://dummyjson.com/products?limit=10&skip=10&select=title,price'";
  public urlLogin=" https://dummyjson.com/auth/login ";


  public lista: Observable<Producto>
  constructor(private http:HttpClient) {


  //Uso de API USER--->
  }
  public login(){
  fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({

    username: 'kminchelle',
    password: '0lelplR',
    // expiresInMins: 60, // optional
  })
})
.then(res => res.json())
.then(console.log);
  }

  public registro(usuario){
    return this.http.post(`${this.URL_USER}`,usuario,{
      headers: { 'Content-Type': 'application/json' }
    })
  }

public verificar(usaurio: Usuario){
  fetch('https://dummyjson.com/auth/login', {
  method: 'GET', /* or POST/PUT/PATCH/DELETE */
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhdHVueTAiLCJlbWFpbCI6ImF0dW55MEBzb2h1LmNvbSIsImZpcnN0TmFtZSI6IlRlcnJ5IiwibGFzdE5hbWUiOiJNZWRodXJzdCIsImdlbmRlciI6Im1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vcm9ib2hhc2gub3JnL2hpY3ZlbGRpY3RhLnBuZyIsImlhdCI6MTY2ODgyMjI4MSwiZXhwIjoxNjY4ODI1ODgxfQ.mAqo6CZTF6AbeEiKHtIzESAkzhhOhQe7cHhNMyN-LdQ  ',
    'Content-Type': 'application/json'
  },
})
.then(res => res.json())
.then(console.log);
}

  /// TERMINO DE USO API USER

  public obtenerLogin(){
    this.http.get(`${this.urlLogin}`)
  }
   /// API PRODUCTOS

   public getProducts(){
    fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
.then(res => res.json())
//.then(console.log);
   }



 // END API PRODUCTOS
 }




