import { ProfileModel } from './ProfileModel';

describe('ProfileModel', () => {
  it('should create an instance with default values', () => {
    const profile = new ProfileModel();

    expect(profile).toBeDefined();
    expect(profile.rankTier).toBeUndefined();
    expect(profile.accountId).toBeUndefined();
    expect(profile.personaName).toBeUndefined();
    expect(profile.name).toBeUndefined();
    expect(profile.avatar).toBeUndefined();
    expect(profile.profileUrl).toBeUndefined();
    expect(profile.isSubscriber).toBeUndefined();
    expect(profile.leaderBordRank).toBeUndefined();
  });

  it('should initialize with provided values', () => {
    const profile = new ProfileModel();
    profile.rankTier = 'Legend 5';
    profile.accountId = '123456';
    profile.personaName = 'Player123';
    profile.name = 'John Doe';
    profile.avatar = 'https://example.com/avatar.jpg';
    profile.profileUrl = 'https://example.com/profile';
    profile.isSubscriber = 'true';
    profile.leaderBordRank = 'Top 100';

    expect(profile.rankTier).toBe('Legend 5');
    expect(profile.accountId).toBe('123456');
    expect(profile.personaName).toBe('Player123');
    expect(profile.name).toBe('John Doe');
    expect(profile.avatar).toBe('https://example.com/avatar.jpg');
    expect(profile.profileUrl).toBe('https://example.com/profile');
    expect(profile.isSubscriber).toBe('true');
    expect(profile.leaderBordRank).toBe('Top 100');
  });

  it('should handle undefined properties gracefully', () => {
    const profile = new ProfileModel();

    expect(profile.rankTier).toBeUndefined();
    expect(profile.accountId).toBeUndefined();
    expect(profile.personaName).toBeUndefined();
    expect(profile.name).toBeUndefined();
    expect(profile.avatar).toBeUndefined();
    expect(profile.profileUrl).toBeUndefined();
    expect(profile.isSubscriber).toBeUndefined();
    expect(profile.leaderBordRank).toBeUndefined();
  });
});
