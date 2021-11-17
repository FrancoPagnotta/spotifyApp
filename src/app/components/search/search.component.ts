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
  loading: boolean = false;

  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit(): void {}
  
  buscar(termino: string) {
    this.loading = true;
    
    this._spotifyService.getArtists(termino)
        .subscribe((res: any) => {
          this.artistas = res;
          this.loading = false;
          console.log(this.artistas)
        });
  }

}
