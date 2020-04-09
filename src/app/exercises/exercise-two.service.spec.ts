import { TestBed } from '@angular/core/testing';

import { ExerciseTwoService } from './exercise-two.service';

describe('ExerciseTwoService', () => {
  let service: ExerciseTwoService;
  let dataService;

  beforeEach(() => {
    dataService = {
      getStreamOfNumbers: jest.fn(),
      getStreamOfArrayWithNumbers: jest.fn(),
      getStreamOfLetters: jest.fn(),
    };
    service = new ExerciseTwoService(dataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
