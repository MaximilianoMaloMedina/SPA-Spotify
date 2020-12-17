import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() Items: any[] = [];

  verArtista(item){
    console.log(item);
    let artistaId;
    if(item.type === 'album') artistaId = item.artists[0].id
    else artistaId = item.id;
    console.log(artistaId);
    this.Router.navigate(['/artist', artistaId])
  }

  constructor( private Router: Router) {}

  ngOnInit(): void {
  }

}
