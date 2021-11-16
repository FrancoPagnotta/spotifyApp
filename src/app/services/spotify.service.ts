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
      'Authorization' : 'Bearer BQA4wvILJG3BOPVSkkGzCLVi1HSEqOVtzkwVyi5-ykC9BzSYTEc-Qm0QYQsbJ7rbWm0AnI3Icwb6sWvCUGiVKclyYQvuFGuK2JPRIAaCohX-SpqNMGLxC37DHLU8Qijurj8sQdqxiCV-ID09BzHq2g'
    });

    return this._http.get(url,{ headers });
  }
  
  getNewReleases() {
    return this.getQuery('browse/new-releases')
                .pipe(map((res:any) => res.albums.items));
  }
  
  getArtist(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`)
                .pipe(map((res:any)=> res.artists.items));
  }
}
