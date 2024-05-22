import { Match } from './Match';

describe('Match', () => {
  it('should create an instance with default values', () => {
    const match = new Match();

    expect(match).toBeDefined();
    expect(match.matchId).toBeUndefined();
    expect(match.radiantWin).toBeUndefined();
    expect(match.radiantId).toBeUndefined();
    expect(match.direId).toBeUndefined();
    expect(match.score).toBeUndefined();
    expect(match.duration).toBeUndefined();
    expect(match.seriesId).toBeUndefined();
    expect(match.leagueId).toBeUndefined();
  });

  it('should initialize with provided values', () => {
    const match = new Match();
    match.matchId = 12345;
    match.radiantWin = true;
    match.radiantId = 1;
    match.direId = 2;
    match.score = '2-1';
    match.duration = '35:00';
    match.seriesId = 5678;
    match.leagueId = 9876;

    expect(match.matchId).toBe(12345);
    expect(match.radiantWin).toBe(true);
    expect(match.radiantId).toBe(1);
    expect(match.direId).toBe(2);
    expect(match.score).toBe('2-1');
    expect(match.duration).toBe('35:00');
    expect(match.seriesId).toBe(5678);
    expect(match.leagueId).toBe(9876);
  });

  it('should handle undefined properties gracefully', () => {
    const match = new Match();

    expect(match.matchId).toBeUndefined();
    expect(match.radiantWin).toBeUndefined();
    expect(match.radiantId).toBeUndefined();
    expect(match.direId).toBeUndefined();
    expect(match.score).toBeUndefined();
    expect(match.duration).toBeUndefined();
    expect(match.seriesId).toBeUndefined();
    expect(match.leagueId).toBeUndefined();
  });
});
