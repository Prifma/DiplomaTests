import { TeamsSingleton } from './TeamsSingleton';
import { ProInfoModel } from '../models/ProInfoModel';

describe('TeamsSingleton', () => {
  beforeEach(() => {
    // Очищення instance перед кожним тестом
    TeamsSingleton.setInstance([]);
  });

  it('should set and get team correctly', () => {
    const teams: ProInfoModel[] = [
      { id: '1', teamId: 1, name: 'Team A', tag: 'TAG-A', logoUrl: 'https://example.com/logo1.jpg' },
      { id: '2', teamId: 2, name: 'Team B', tag: 'TAG-B', logoUrl: 'https://example.com/logo2.jpg' },
    ];

    TeamsSingleton.setInstance(teams);

    const retrievedTeam = TeamsSingleton.getTeam(1);

    expect(retrievedTeam).toBeDefined();
    expect(retrievedTeam?.name).toBe('Team A');
  });

  it('should return undefined if team is not found', () => {
    const teams: ProInfoModel[] = [
      { id: '1', teamId: 1, name: 'Team A', tag: 'TAG-A', logoUrl: 'https://example.com/logo1.jpg' },
      { id: '2', teamId: 2, name: 'Team B', tag: 'TAG-B', logoUrl: 'https://example.com/logo2.jpg' },
    ];

    TeamsSingleton.setInstance(teams);

    const retrievedTeam = TeamsSingleton.getTeam(3);

    expect(retrievedTeam).toBeUndefined();
  });

  it('should return all teams correctly', () => {
    const teams: ProInfoModel[] = [
      { id: '1', teamId: 1, name: 'Team A', tag: 'TAG-A', logoUrl: 'https://example.com/logo1.jpg' },
      { id: '2', teamId: 2, name: 'Team B', tag: 'TAG-B', logoUrl: 'https://example.com/logo2.jpg' },
    ];

    TeamsSingleton.setInstance(teams);

    const allTeams = TeamsSingleton.getAllTeams();

    expect(allTeams).toBeDefined();
    expect(allTeams?.length).toBe(2);
    expect(allTeams).toEqual(teams);
  });
});
