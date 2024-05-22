import { TotalsModel } from './TotalsModel';

describe('TotalsModel', () => {
  it('should create an instance with default values', () => {
    const totals = new TotalsModel();

    expect(totals).toBeDefined();
    expect(totals.field).toBeUndefined();
    expect(totals.count).toBeUndefined();
  });

  it('should initialize with provided values', () => {
    const totals = new TotalsModel();
    totals.field = 'kills';
    totals.count = '100';

    expect(totals.field).toBe('kills');
    expect(totals.count).toBe('100');
  });

  it('should handle undefined properties gracefully', () => {
    const totals = new TotalsModel();

    expect(totals.field).toBeUndefined();
    expect(totals.count).toBeUndefined();
  });
});
