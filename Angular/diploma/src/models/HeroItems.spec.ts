import { HeroItems } from './HeroItems';
import { ItemModel } from './ItemModel';

describe('HeroItems', () => {
  it('should create an instance with default values', () => {
    const heroItems = new HeroItems();

    expect(heroItems).toBeDefined();
    expect(heroItems.heroId).toBeUndefined();
    expect(heroItems.name).toBeUndefined();
    expect(heroItems.imageUrl).toBeUndefined();
    expect(heroItems.start).toBeUndefined();
    expect(heroItems.early).toBeUndefined();
    expect(heroItems.mid).toBeUndefined();
    expect(heroItems.late).toBeUndefined();
    expect(heroItems.error).toBeUndefined();
  });

  it('should initialize with provided values', () => {
    const startItems: ItemModel[] = [
      { id: '1', name: 'Start Item 1', path: '/start/item1' },
      { id: '2', name: 'Start Item 2', path: '/start/item2' },
    ];

    const earlyItems: ItemModel[] = [
      { id: '3', name: 'Early Item 1', path: '/early/item1' },
      { id: '4', name: 'Early Item 2', path: '/early/item2' },
    ];

    const midItems: ItemModel[] = [
      { id: '5', name: 'Mid Item 1', path: '/mid/item1' },
      { id: '6', name: 'Mid Item 2', path: '/mid/item2' },
    ];

    const lateItems: ItemModel[] = [
      { id: '7', name: 'Late Item 1', path: '/late/item1' },
      { id: '8', name: 'Late Item 2', path: '/late/item2' },
    ];

    const heroItems = new HeroItems();
    heroItems.heroId = 1;
    heroItems.name = 'Superman';
    heroItems.imageUrl = 'https://example.com/superman.jpg';
    heroItems.start = startItems;
    heroItems.early = earlyItems;
    heroItems.mid = midItems;
    heroItems.late = lateItems;
    heroItems.error = false;

    expect(heroItems.heroId).toBe(1);
    expect(heroItems.name).toBe('Superman');
    expect(heroItems.imageUrl).toBe('https://example.com/superman.jpg');
    expect(heroItems.start).toEqual(startItems);
    expect(heroItems.early).toEqual(earlyItems);
    expect(heroItems.mid).toEqual(midItems);
    expect(heroItems.late).toEqual(lateItems);
    expect(heroItems.error).toBeFalsy();
  });

  it('should handle undefined properties gracefully', () => {
    const heroItems = new HeroItems();

    expect(heroItems.heroId).toBeUndefined();
    expect(heroItems.name).toBeUndefined();
    expect(heroItems.imageUrl).toBeUndefined();
    expect(heroItems.start).toBeUndefined();
    expect(heroItems.early).toBeUndefined();
    expect(heroItems.mid).toBeUndefined();
    expect(heroItems.late).toBeUndefined();
    expect(heroItems.error).toBeUndefined();
  });
});
