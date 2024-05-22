import { ItemModel } from './ItemModel';

describe('ItemModel', () => {
  it('should create an instance with default values', () => {
    const item = new ItemModel();

    expect(item).toBeDefined();
    expect(item.id).toBeUndefined();
    expect(item.name).toBeUndefined();
    expect(item.path).toBeUndefined();
  });

  it('should initialize with provided values', () => {
    const item = new ItemModel();
    item.id = '1';
    item.name = 'Example Item';
    item.path = '/example/path';

    expect(item.id).toBe('1');
    expect(item.name).toBe('Example Item');
    expect(item.path).toBe('/example/path');
  });

  it('should handle undefined properties gracefully', () => {
    const item = new ItemModel();

    expect(item.id).toBeUndefined();
    expect(item.name).toBeUndefined();
    expect(item.path).toBeUndefined();
  });
});
