import { TestBed } from '@angular/core/testing';

import { ExerciseOneService } from './exercise-one.service';

describe('ExerciseOneService', () => {
  let service: ExerciseOneService;
  let dataService;

  beforeEach(() => {
    dataService = {
      getStreamOfNumbers: jest.fn(),
      getStreamOfArrayWithNumbers: jest.fn(),
      getStreamOfLetters: jest.fn(),
    };

    service = new ExerciseOneService(dataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
