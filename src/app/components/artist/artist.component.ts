import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent implements OnInit {

  artist: any = {};

  constructor(private _activatedRoute: ActivatedRoute, private _spotifyService: SpotifyService) {
    this._activatedRoute.params.subscribe(params => {
      this.getArtista(params['id']);
    })
   }

  ngOnInit(): void {
  }

  getArtista(id: string) {
    this._spotifyService.getArtist(id) 
        .subscribe(res => {
          console.log(res)
          this.artist = res;
        });
  }

}
