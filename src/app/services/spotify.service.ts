import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private _http: HttpClient) { }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQDjHRzi40XyCynD6MvVPX6LbvW-Xd7m5ykecuNu5HVal4hVHEsAN2G7VmmG76h_2p2hJIHSGSDg2Jt4rtUQtaV3k21n1O1uj_OAbLv-J7cn5MCZR5mHYL2g9kX44xsJDd4GtHVRG_YxmBp5Q_P8Nw'
    });

    return this._http.get('https://api.spotify.com/v1/browse/new-releases',{ headers });    
  }
  
  getArtist(termino: string) {
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQDjHRzi40XyCynD6MvVPX6LbvW-Xd7m5ykecuNu5HVal4hVHEsAN2G7VmmG76h_2p2hJIHSGSDg2Jt4rtUQtaV3k21n1O1uj_OAbLv-J7cn5MCZR5mHYL2g9kX44xsJDd4GtHVRG_YxmBp5Q_P8Nw'
    });
  
    return this._http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=20`,{ headers });    

  }
}
