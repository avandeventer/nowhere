import { TestBed } from '@angular/core/testing';

import { GameSessionService } from './game-session.service';

describe('GameSessionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GameSessionService = TestBed.get(GameSessionService);
    expect(service).toBeTruthy();
  });
});
