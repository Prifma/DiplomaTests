import { HeroModel } from './HeroModel';
import { ItemModel } from './ItemModel';

describe('HeroModel', () => {
  it('should create an instance with default values', () => {
    const hero = new HeroModel();

    expect(hero).toBeDefined();
    expect(hero.heroId).toBeUndefined();
    expect(hero.heroName).toBeUndefined();
    expect(hero.imgUrl).toBeUndefined();
    expect(hero.accountId).toBeUndefined();
    expect(hero.netWorth).toBeUndefined();
    expect(hero.playerSlot).toBeUndefined();
    expect(hero.mainItems).toEqual([]);
    expect(hero.backPackItems).toEqual([]);
    expect(hero.neutralItem).toEqual({});
    expect(hero.kills).toBeUndefined();
    expect(hero.deaths).toBeUndefined();
    expect(hero.assists).toBeUndefined();
    expect(hero.goldPerMin).toBeUndefined();
    expect(hero.expPerMin).toBeUndefined();
    expect(hero.heroDamage).toBeUndefined();
    expect(hero.lastHits).toBeUndefined();
    expect(hero.denies).toBeUndefined();
    expect(hero.level).toBeUndefined();
    expect(hero.towerDamage).toBeUndefined();
  });

  it('should initialize with provided values', () => {
    const mainItems: ItemModel[] = [
      { id: '1', name: 'Main Item 1', path: '/main/item1' },
      { id: '2', name: 'Main Item 2', path: '/main/item2' },
    ];

    const backPackItems: ItemModel[] = [
      { id: '3', name: 'Backpack Item 1', path: '/backpack/item1' },
    ];

    const neutralItem: ItemModel = { id: '4', name: 'Neutral Item', path: '/neutral/item' };

    const hero = new HeroModel();
    hero.heroId = '1';
    hero.heroName = 'Superman';
    hero.imgUrl = 'https://example.com/superman.jpg';
    hero.accountId = '123';
    hero.netWorth = '10000';
    hero.playerSlot = '1';
    hero.mainItems = mainItems;
    hero.backPackItems = backPackItems;
    hero.neutralItem = neutralItem;
    hero.kills = '10';
    hero.deaths = '2';
    hero.assists = '8';
    hero.goldPerMin = '600';
    hero.expPerMin = '500';
    hero.heroDamage = '15000';
    hero.lastHits = '200';
    hero.denies = '20';
    hero.level = '25';
    hero.towerDamage = '5000';

    expect(hero.heroId).toBe('1');
    expect(hero.heroName).toBe('Superman');
    expect(hero.imgUrl).toBe('https://example.com/superman.jpg');
    expect(hero.accountId).toBe('123');
    expect(hero.netWorth).toBe('10000');
    expect(hero.playerSlot).toBe('1');
    expect(hero.mainItems).toEqual(mainItems);
    expect(hero.backPackItems).toEqual(backPackItems);
    expect(hero.neutralItem).toEqual(neutralItem);
    expect(hero.kills).toBe('10');
    expect(hero.deaths).toBe('2');
    expect(hero.assists).toBe('8');
    expect(hero.goldPerMin).toBe('600');
    expect(hero.expPerMin).toBe('500');
    expect(hero.heroDamage).toBe('15000');
    expect(hero.lastHits).toBe('200');
    expect(hero.denies).toBe('20');
    expect(hero.level).toBe('25');
    expect(hero.towerDamage).toBe('5000');
  });

  it('should handle undefined properties gracefully', () => {
    const hero = new HeroModel();

    expect(hero.heroId).toBeUndefined();
    expect(hero.heroName).toBeUndefined();
    expect(hero.imgUrl).toBeUndefined();
    expect(hero.accountId).toBeUndefined();
    expect(hero.netWorth).toBeUndefined();
    expect(hero.playerSlot).toBeUndefined();
    expect(hero.mainItems).toEqual([]);
    expect(hero.backPackItems).toEqual([]);
    expect(hero.neutralItem).toEqual({});
    expect(hero.kills).toBeUndefined();
    expect(hero.deaths).toBeUndefined();
    expect(hero.assists).toBeUndefined();
    expect(hero.goldPerMin).toBeUndefined();
    expect(hero.expPerMin).toBeUndefined();
    expect(hero.heroDamage).toBeUndefined();
    expect(hero.lastHits).toBeUndefined();
    expect(hero.denies).toBeUndefined();
    expect(hero.level).toBeUndefined();
    expect(hero.towerDamage).toBeUndefined();
  });
});
