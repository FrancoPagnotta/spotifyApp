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
  loading: boolean = true;
  showError: boolean = false;
  msgError: string = '';
  
  constructor(private _spotifyService: SpotifyService) {
    this.loading = true;
    
    this._spotifyService.getNewReleases()
    .subscribe((res: any) => {
      this.nuevasCanciones = res;
      this.loading = false;
      console.log(this.nuevasCanciones);
    }, (err) => {
      this.loading = false;
      this.showError = true;
      this.msgError = err.error.error.message;
      console.log(err);
    });
  }
  
  ngOnInit(): void {}

}
