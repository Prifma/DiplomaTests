import { AccountSingleton } from './AccountSingleton';
import { AccInfo } from '../models/AccInfo';
import { UserType } from '../models/Comunity/UserType';

describe('AccountSingleton', () => {
  beforeEach(() => {
    // Очищення instance перед кожним тестом
    AccountSingleton.setInstance(new AccInfo);
  });

  it('should set and get AccInfo correctly', () => {
    const accInfo: AccInfo = {
      id: '1',
      userType: UserType.Admin,
      isAuth: true,
      name: 'John Doe',
      imgUrl: 'https://example.com/avatar.jpg'
    };

    AccountSingleton.setInstance(accInfo);

    const retrievedAccInfo = AccountSingleton.getAcc();

    expect(retrievedAccInfo).toBeDefined();
    expect(retrievedAccInfo).toEqual(accInfo);
  });

 

  it('should maintain single instance of AccountSingleton', () => {
    const accInfo1: AccInfo = {
      id: '1',
      userType: UserType.Admin,
      isAuth: true,
      name: 'John Doe',
      imgUrl: 'https://example.com/avatar.jpg'
    };

    const accInfo2: AccInfo = {
      id: '2',
      userType: UserType.Common,
      isAuth: false,
      name: 'Jane Smith',
      imgUrl: 'https://example.com/avatar2.jpg'
    };

    AccountSingleton.setInstance(accInfo1);
    const instance1 = AccountSingleton.getAcc();
    expect(instance1).toEqual(accInfo1);

    AccountSingleton.setInstance(accInfo2);
    const instance2 = AccountSingleton.getAcc();

    expect(instance2).toEqual(accInfo2);
  });
});
