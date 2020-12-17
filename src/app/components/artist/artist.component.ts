import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent implements OnInit {

  artista: any = {};
  tracks: any = [];
  loading: boolean;

  constructor( private aR:ActivatedRoute, private spotify: SpotifyService ) {
    this.loading = true; 
    this.aR.params.subscribe(params => {
      this.getArtist(params["id"]);
      this.getTopTraks(params["id"]);
      // this.spotify.routeArtist(params['id']).subscribe(data => {
      //   this.artista = data;
      //   console.log(this.artista);
      //   this.loading = false; 


      // });
    });
  }

  getTopTraks(id){
    this.spotify.getTopTracks(id).subscribe(data => this.tracks= data);
  }

  getArtist(id){
    this.spotify.routeArtist(id).subscribe(data => {
      this.artista = data;
      this.loading = false; 
      console.log(this.artista);
    });
  }

  ngOnInit(): void {
  }

}
