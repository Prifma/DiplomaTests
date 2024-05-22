import { Hero } from './Hero';

describe('Hero', () => {
  it('should create an instance with default values', () => {
    const hero = new Hero();

    expect(hero).toBeDefined();
    expect(hero.name).toBeUndefined();
    expect(hero.id).toBeUndefined();
    expect(hero.localize_name).toBeUndefined();
  });

  it('should initialize with provided values', () => {
    const hero = new Hero();
    hero.name = 'Superman';
    hero.id = 1;
    hero.localize_name = 'Супермен'; // Assuming this is an example of a localized name

    expect(hero.name).toBe('Superman');
    expect(hero.id).toBe(1);
    expect(hero.localize_name).toBe('Супермен');
  });
});
