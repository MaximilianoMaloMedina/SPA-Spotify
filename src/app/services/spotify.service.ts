import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getTopTracks(id){
  return this.getQuery(`artists/${id}/top-tracks?market=MX`).pipe(map(data => data['tracks']
  ));
  }

  routeArtist(id){
    return this.getQuery(`artists/${id}`).pipe(map(data => {
      return data;
    }));
  }

  getQuery( query:string ){
    //aqui se declaran los headers para nuestras peticiones
    const headers = new HttpHeaders({
      Authorization : 'Bearer BQD7yRaO0W3wbxwoLRtycJkYuSffUIRmUED-QweYhV1tS43PVTzKWL3-ucHboEMAM14FeA82cBb_WzaiD5'
    });
    const url = `https://api.spotify.com/v1/${query}`
    return this.http.get(url, {headers})

  }

  getNewReleases(){
    // const headers = new HttpHeaders({
    //   Authorization : 'Bearer BQDQBFHo__k9cQckdy18t5xKLYe9xGgL6v97hFdEFUs08Zsp0N8C9YW4ea5esvPSLWU2Ad6XPOeJiaKDIws'
    // });

     return this.getQuery('browse/new-releases').pipe(map(data =>{
       return data['albums'].items;       
     }))

    //  return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers}).pipe(map(data => {
    //   return data['albums'].items;
    //  }))
  }

  getArtist(term){
    // const headers = new HttpHeaders({
    //   Authorization : 'Bearer BQBOG_SZjdOGeGTHRdmeAc3bG2v6J0mzj4SucSXlJspm1OGUp4LwIo99v5k-h9H9p6_abUFXDX-upgHy9ks'
      
    // });

    return this.getQuery(`search?q=${term}&type=artist`).pipe(map(data => {      
      return data['artists'].items;
    }))

    // return this.http.get(`https://api.spotify.com/v1/search?q=${term}&type=artist`, {headers}).pipe(map(data => {
    //   return data['artists'].items;
    // }));
  }
    
}
