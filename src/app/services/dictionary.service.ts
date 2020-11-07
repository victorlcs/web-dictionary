import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Definition } from '../models/Definition';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  words: string = 'sup';
  apiUrl = environment.apiUrl;
  apiHeader = environment.apiHeader;

  constructor(private http: HttpClient) {}

  defineWord(word: string) {
    let headers = new HttpHeaders();
    headers = headers.append(this.apiHeader.host, this.apiHeader.hostValue);
    headers = headers.append(this.apiHeader.key, this.apiHeader.keyValue);
    // headers: {
    //   'x-rapidapi-host':
    //     'mashape-community-urban-dictionary.p.rapidapi.com',
    //   'x-rapidapi-key':
    //     'a793f62aacmshb9779ee844741f5p127045jsn24234269d0ff',
    // }
    const params = new HttpParams().append('term', word);
    return this.http
      .get(this.apiUrl, {
        headers,
        params,
      })
      .pipe(
        map((result: { list: Definition[] }) => {
          let definitions = result.list;
          return definitions;
        })
      );
  }
}
