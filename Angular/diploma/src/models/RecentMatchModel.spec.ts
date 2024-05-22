import { RecentMatchModel } from './RecentMatchModel';

describe('RecentMatchModel', () => {
  it('should create an instance with default values', () => {
    const recentMatch = new RecentMatchModel();

    expect(recentMatch).toBeDefined();
    expect(recentMatch.matchId).toBeUndefined();
    expect(recentMatch.playerSlot).toBeUndefined();
    expect(recentMatch.radiantWin).toBeUndefined();
    expect(recentMatch.heroId).toBeUndefined();
    expect(recentMatch.heroName).toBeUndefined();
    expect(recentMatch.imgUrl).toBeUndefined();
    expect(recentMatch.kills).toBeUndefined();
    expect(recentMatch.deaths).toBeUndefined();
    expect(recentMatch.assists).toBeUndefined();
  });

  it('should initialize with provided values', () => {
    const recentMatch = new RecentMatchModel();
    recentMatch.matchId = '123456';
    recentMatch.playerSlot = '1';
    recentMatch.radiantWin = 'true';
    recentMatch.heroId = '1';
    recentMatch.heroName = 'Anti-Mage';
    recentMatch.imgUrl = 'https://example.com/antimage.jpg';
    recentMatch.kills = '10';
    recentMatch.deaths = '2';
    recentMatch.assists = '5';

    expect(recentMatch.matchId).toBe('123456');
    expect(recentMatch.playerSlot).toBe('1');
    expect(recentMatch.radiantWin).toBe('true');
    expect(recentMatch.heroId).toBe('1');
    expect(recentMatch.heroName).toBe('Anti-Mage');
    expect(recentMatch.imgUrl).toBe('https://example.com/antimage.jpg');
    expect(recentMatch.kills).toBe('10');
    expect(recentMatch.deaths).toBe('2');
    expect(recentMatch.assists).toBe('5');
  });

  it('should handle undefined properties gracefully', () => {
    const recentMatch = new RecentMatchModel();

    expect(recentMatch.matchId).toBeUndefined();
    expect(recentMatch.playerSlot).toBeUndefined();
    expect(recentMatch.radiantWin).toBeUndefined();
    expect(recentMatch.heroId).toBeUndefined();
    expect(recentMatch.heroName).toBeUndefined();
    expect(recentMatch.imgUrl).toBeUndefined();
    expect(recentMatch.kills).toBeUndefined();
    expect(recentMatch.deaths).toBeUndefined();
    expect(recentMatch.assists).toBeUndefined();
  });
});
