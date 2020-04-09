import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  
  getStreamOfNumbers() {
    return of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  }

  getStreamOfArrayWithNumbers() {
    return of([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  }

  getStreamOfLetters() {
    return of('a', 'b', 'c', 'a', 'a', 'c', 'd');
  }

  getBackendData(searchTerm?: string, page: number = 0) {
    return ajax(`http://whatever.com/api/items?term=${searchTerm}&page=${page}`)
      .pipe(map(response => response.response));
  }

  uploadPicture(imgUrl) {
    return of('success');
  }
}
