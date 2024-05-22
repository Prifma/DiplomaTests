import { TeamModel } from './TeamModel';
import { ProInfoModel } from './ProInfoModel';

describe('TeamModel', () => {
  it('should create an instance with default values', () => {
    const team = new TeamModel();

    expect(team).toBeDefined();
    expect(team.score).toBe("");
    expect(team.proModel).toBeUndefined();
  });

  it('should initialize with provided values', () => {
    const proInfoModel: ProInfoModel = {
      id: '1',
      teamId: 123,
      name: 'Team A',
      tag: 'TA',
      logoUrl: 'https://example.com/teamA_logo.jpg'
    };

    const team = new TeamModel();
    team.score = "100";
    team.proModel = proInfoModel;

    expect(team.score).toBe("100");
    expect(team.proModel).toEqual(proInfoModel);
  });

  it('should handle undefined properties gracefully', () => {
    const team = new TeamModel();

    expect(team.score).toBe("");
    expect(team.proModel).toBeUndefined();
  });
});
