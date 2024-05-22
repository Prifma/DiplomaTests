import { AccInfo } from './AccInfo';
import { UserType } from './Comunity/UserType';

describe('AccInfo', () => {
  it('should create an instance with default values', () => {
    const accInfo = new AccInfo();

    expect(accInfo).toBeDefined();
    expect(accInfo.id).toBeUndefined();
    expect(accInfo.userType).toBeUndefined();
    expect(accInfo.isAuth).toBeFalsy();
    expect(accInfo.name).toBeUndefined();
    expect(accInfo.imgUrl).toBeUndefined();
  });

  it('should initialize with provided values', () => {
    const accInfo = new AccInfo();
    accInfo.id = '1';
    accInfo.userType = UserType.Admin;
    accInfo.isAuth = true;
    accInfo.name = 'John Doe';
    accInfo.imgUrl = 'https://example.com/avatar.jpg';

    expect(accInfo.id).toBe('1');
    expect(accInfo.userType).toBe(UserType.Admin);
    expect(accInfo.isAuth).toBeTruthy();
    expect(accInfo.name).toBe('John Doe');
    expect(accInfo.imgUrl).toBe('https://example.com/avatar.jpg');
  });

  it('should have default isAuth value as false', () => {
    const accInfo = new AccInfo();

    expect(accInfo.isAuth).toBeFalsy();
  });
});
