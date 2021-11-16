import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];

  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit(): void {
  }
  
  buscar(termino: string) {
    console.log(termino)
    this._spotifyService.getArtist(termino)
        .subscribe((res: any) => {
          console.log(res.artists.items);
          this.artistas = res.artists.items;
    })
  }

}
