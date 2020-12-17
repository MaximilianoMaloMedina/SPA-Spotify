import { Component, OnInit } from '@angular/core';
//para hacer peticiones http
// import { HttpClient } from '@angular/common/http'
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {


  // paises: any = [];
  // private http: HttpClient
  // this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe((data) =>{
  //   console.log(data);
  //   this.paises = data;
  // })  

  error: boolean;
  releases: any = [];
  loading: boolean;
  mensajeError: string;

  constructor( private spotify: SpotifyService ) {
    this.loading = true;
    this.spotify.getNewReleases().subscribe( (data: any) => {
      this.releases = data;
      console.log(this.releases);
      this.loading = false;
    }, (errorServicio) => {
      this.loading = false;
      this.mensajeError = errorServicio.error.error.message;
    });
    
  }


  ngOnInit(): void {
    
  }

}
