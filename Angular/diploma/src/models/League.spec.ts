import { League } from './League';

describe('League', () => {
  it('should create an instance with default values', () => {
    const league = new League();

    expect(league).toBeDefined();
    expect(league.id).toBeUndefined();
    expect(league.name).toBeUndefined();
  });

  it('should initialize with provided values', () => {
    const league = new League();
    league.id = 1;
    league.name = 'Premier League';

    expect(league.id).toBe(1);
    expect(league.name).toBe('Premier League');
  });

  it('should handle undefined properties gracefully', () => {
    const league = new League();

    expect(league.id).toBeUndefined();
    expect(league.name).toBeUndefined();
  });
});
