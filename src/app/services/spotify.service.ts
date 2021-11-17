import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQA_37-33RIm0jOuJWIv2ZIev1ocr78HRVuC8N2HpyB2kVangrZCzdLz21aUi3Cps5FO_YvyvGugnzDi-3URJBmIA-iWDetfp9ojXuhgIQ50lqkn1Hc0zr2VUjM_X9dQWYQepNcZuI2CVy4X6UQeOg'
    });

    return this._http.get(url,{ headers });
  }
  
  getNewReleases() {
    return this.getQuery('browse/new-releases')
                .pipe(map((res:any) => res.albums.items));
  }
  
  getArtists(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`)
                .pipe(map((res:any)=> res.artists.items));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`)
                // .pipe(map((res:any)=> res)); // No hace falta transformar la data pasandola por el pipe map porque en este caso la peticion ya nos retorna el objeto del artista. 
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?market=ES`)
                .pipe(map((res:any)=> res.tracks)); 
  }
}
