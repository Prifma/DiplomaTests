import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ServerService } from './server';
import { Guid } from 'guid-typescript';
import { Comment } from 'src/models/Comunity/Comment';
import { Post } from 'src/models/Comunity/Post';
import { Reaction } from 'src/models/Comunity/Reaction';
import { SortingType } from 'src/models/Comunity/SortingType';

describe('ServerService', () => {
  let service: ServerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServerService]
    });

    service = TestBed.inject(ServerService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getTeam with correct URL', () => {
    const teamId = 1;
    service.getTeam(teamId).subscribe();
    const req = httpMock.expectOne(`/api/team?id=${teamId}`);
    expect(req.request.method).toBe('GET');
  });

  it('should call getMatch with correct URL', () => {
    const matchId = 1;
    service.getMatch(matchId).subscribe();
    const req = httpMock.expectOne(`/api/match?id=${matchId}`);
    expect(req.request.method).toBe('GET');
  });

  it('should call getPlayer with correct URL', () => {
    const playerId = 1;
    service.getPlayer(playerId).subscribe();
    const req = httpMock.expectOne(`/api/account?id=${playerId}`);
    expect(req.request.method).toBe('GET');
  });

  it('should call getRecentMatches with correct URL', () => {
    const playerId = 1;
    service.getRecentMatches(playerId).subscribe();
    const req = httpMock.expectOne(`/api/rMatches?id=${playerId}`);
    expect(req.request.method).toBe('GET');
  });

  it('should call getTotals with correct URL', () => {
    const id = 1;
    service.getTotals(id).subscribe();
    const req = httpMock.expectOne(`/api/totals?id=${id}`);
    expect(req.request.method).toBe('GET');
  });

  it('should call loadUser with correct URL', () => {
    service.loadUser().subscribe();
    const req = httpMock.expectOne('/auth/loaduser');
    expect(req.request.method).toBe('GET');
  });

  it('should call getUser with correct URL', () => {
    const userId = '123';
    service.getUser(userId).subscribe();
    const req = httpMock.expectOne(`/api/user?id=${userId}`);
    expect(req.request.method).toBe('GET');
  });



  it('should call getPost with correct URL', () => {
    const postId = Guid.create();
    service.getPost(postId).subscribe();
    const req = httpMock.expectOne(`/db/getPost?id=${postId}`);
    expect(req.request.method).toBe('GET');
  });





  it('should call checkReactionIsExist with correct URL', () => {
    const id = '123';
    const entityId = Guid.create();
    service.checkReactionIsExist(id, entityId).subscribe();
    const req = httpMock.expectOne(`/db/checkReaction?i=${id}&e=${entityId}`);
    expect(req.request.method).toBe('GET');
  });



  it('should call deleteEntity with correct URL and body', () => {
    const id = Guid.create();
    service.deleteEntity(id).subscribe();
    const req = httpMock.expectOne('/db/deleteEntity');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ id });
  });

  it('should call banUser with correct URL and body', () => {
    const userId = '123';
    service.banUser(userId).subscribe();
    const req = httpMock.expectOne('/db/banUser');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ id: userId });
  });


  it('should call getTrends with correct URL', () => {
    const trendId = '123';
    service.getTrends(trendId).subscribe();
    const req = httpMock.expectOne(`/api/trends?id=${trendId}`);
    expect(req.request.method).toBe('GET');
  });

  it('should call getHeroes with correct URL', () => {
    service.getHeroes().subscribe();
    const req = httpMock.expectOne('/api/heroes');
    expect(req.request.method).toBe('GET');
  });

  it('should call getLeagues with correct URL', () => {
    const page = 1;
    const search = 'league';
    service.getLeagues(page, search).subscribe();
    const req = httpMock.expectOne(`/api/leagues?page=${page}&search=${search}`);
    expect(req.request.method).toBe('GET');
  });

  it('should call getMatches with correct URL', () => {
    const id = 1;
    const page = 1;
    service.getMatches(id, page).subscribe();
    const req = httpMock.expectOne(`/api/matches?id=${id}&page=${page}`);
    expect(req.request.method).toBe('GET');
  });
});
