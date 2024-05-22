import { ProInfoModel } from './ProInfoModel';

describe('ProInfoModel', () => {
  it('should create an instance with default values', () => {
    const proInfo = new ProInfoModel();

    expect(proInfo).toBeDefined();
    expect(proInfo.id).toBeUndefined();
    expect(proInfo.teamId).toBeUndefined();
    expect(proInfo.name).toBeUndefined();
    expect(proInfo.tag).toBeUndefined();
    expect(proInfo.logoUrl).toBeUndefined();
  });

  it('should initialize with provided values', () => {
    const proInfo = new ProInfoModel();
    proInfo.id = '1';
    proInfo.teamId = 123;
    proInfo.name = 'Team A';
    proInfo.tag = 'TA';
    proInfo.logoUrl = 'https://example.com/teamA_logo.jpg';

    expect(proInfo.id).toBe('1');
    expect(proInfo.teamId).toBe(123);
    expect(proInfo.name).toBe('Team A');
    expect(proInfo.tag).toBe('TA');
    expect(proInfo.logoUrl).toBe('https://example.com/teamA_logo.jpg');
  });

  it('should handle undefined properties gracefully', () => {
    const proInfo = new ProInfoModel();

    expect(proInfo.id).toBeUndefined();
    expect(proInfo.teamId).toBeUndefined();
    expect(proInfo.name).toBeUndefined();
    expect(proInfo.tag).toBeUndefined();
    expect(proInfo.logoUrl).toBeUndefined();
  });
});
