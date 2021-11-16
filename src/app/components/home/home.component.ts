import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];

  paises: any[] = [];

  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this._spotifyService.getNewReleases()
        .subscribe((res: any) => {
          console.log(res.albums.items);
          this.nuevasCanciones = res.albums.items;
        })
  }

}
