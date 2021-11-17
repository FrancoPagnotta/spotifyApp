import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
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
  loading: boolean = false;
  topTracks: any[] = [];

  constructor(private _activatedRoute: ActivatedRoute, private _spotifyService: SpotifyService) {
    this._activatedRoute.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    })
   }

  ngOnInit(): void {
  }

  getArtista(id: string) {
    this.loading = true;
    this._spotifyService.getArtist(id) 
    .subscribe(res => {
      this.artist = res;
      this.loading = false;
    });
  }
  
  getTopTracks(id: string) {
        this.loading = true;
        this._spotifyService.getTopTracks(id) 
        .subscribe(res => {
          console.log(res)
          this.topTracks = res;
          console.log(this.topTracks);
          this.loading = false;
        });
  }

}
