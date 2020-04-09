import { TestBed } from '@angular/core/testing';

import { ExerciseThreeService } from './exercise-three.service';

describe('ExerciseThreeService', () => {
  let service: ExerciseThreeService;
  let dataService;


  beforeEach(() => {
    dataService = {
      getBackendData: jest.fn(),
      uploadPicture: jest.fn(),
    };
    service = new ExerciseThreeService(dataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
