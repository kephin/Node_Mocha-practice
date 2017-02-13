const expect = require('expect');
const rewire = require('rewire');

const app = rewire('./app');

describe('App', () => {
  const db = {
    saveUser: expect.createSpy(),
  };
  app.__set__('db', db);

  it('should call the spy correctly', () => {
    const spy = expect.createSpy();
    spy('kevin', 30);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledWith('kevin', 30);
  });

  it('should call saveUser with user object', () => {
    const email = 'kevin@example.com';
    const password = '12345';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({ email, password });
  });
});
