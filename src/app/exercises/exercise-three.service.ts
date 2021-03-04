import { Injectable } from '@angular/core';
import { Scheduler, Observable, merge, combineLatest } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap, startWith, mergeMap, concatMap } from 'rxjs/operators';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class ExerciseThreeService {
  scheduler: Scheduler;

  constructor(private dataService: DataService) {
  }

  // TODO: finish the auto complete so that we actually perform a backend call every time the searchTerm changes.
  // TODO: Avoid having unnecessary backend calls
  // TODO: SearchTerms closer than 2ms should be ignored
  // TODO: Filter out immediate duplicate values
  // TODO: Filter out searchterms shorter than 2 characters
  // TODO: Flatten the backend call
  // TODO: (use the dataService.getBackendData for the backend call)
  autoComplete(searchTerm$: Observable<string>) {
    return searchTerm$
      .pipe(
        debounceTime(2, this.scheduler),
        distinctUntilChanged(),
        filter(x => x.length > 1),
        switchMap(y => this.dataService.getBackendData(y))
      );
  }

  // TODO: Every time the user clicks OR swipes down on his mobile screen the data needs to be reloaded.
  // TODO: Make sure that a backend call is performed on startup as well
  // TODO: An empty string should be the default value
  // TODO: (use the dataService.getBackendData without parameters for the backend call)
  refreshTheData(click$: Observable<string>, swipe$: Observable<string>) {
    return merge(click$, swipe$)
      .pipe(
        startWith(''),
        switchMap(x => this.dataService.getBackendData(x))
      );
  }

  // TODO: Every time the page or searchTerm changes a backend call must be performed.
  // TODO: Avoid multiple backend calls
  // TODO: (use the dataService.getBackendData, pass the searchTerm and page as parameters)
  refreshTheData2(page$: Observable<number>, searchTerm$: Observable<string>) {
    return combineLatest([searchTerm$, page$])
      .pipe(
        mergeMap(x => this.dataService.getBackendData(x[0], x[1]))
      );
  }

  // TODO: For every event in the pictures$, an image should be uploaded, in order
  // TODO: (use the dataService.uploadPicture for the backend call)
  uploadPictures(pictures$: Observable<string>) {
    return pictures$
      .pipe(concatMap(x => this.dataService.uploadPicture(x)));
  }
}
