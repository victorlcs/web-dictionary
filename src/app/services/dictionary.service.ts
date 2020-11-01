import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Definition } from '../models/Definition';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  words: string = 'sup';

  constructor(private http: HttpClient) {}

  defineWord() {
    let headers = new HttpHeaders();
    headers = headers.append(
      'x-rapidapi-host',
      'mashape-community-urban-dictionary.p.rapidapi.com'
    );
    headers = headers.append(
      'x-rapidapi-key',
      'a793f62aacmshb9779ee844741f5p127045jsn24234269d0ff'
    );

    // headers: {
    //   'x-rapidapi-host':
    //     'mashape-community-urban-dictionary.p.rapidapi.com',
    //   'x-rapidapi-key':
    //     'a793f62aacmshb9779ee844741f5p127045jsn24234269d0ff',
    // }
    const params = new HttpParams().append('term', this.words);
    return this.http
      .get('https://mashape-community-urban-dictionary.p.rapidapi.com/define', {
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
