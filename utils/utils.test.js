const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
  describe('#square', () => {
    it('should square number', () => {
      //arrange
      //act
      const res = utils.square(14);
      //assert
      expect(res).toBeA('number').toBe(196);
      // if (res !== 196) {
      //   throw new Error(`Expected 196, but return ${res}`);
      // }
    });
    it('should asyn square number', (done) => {
      utils.asyncSquare(15, (square) => {
        expect(square).toBe(225).toBeA('number');
        done();
      });
    });
  });

  describe('#set name', () => {
    it('should set first and last name', () => {
      let kevin = {
        age: 29,
      };
      kevin = utils.setName(kevin, 'Kevin Hsaio');
      expect(kevin).toBeA('object').toInclude({
        firstName: 'Kevin',
        lastName: 'Hsaio',
      });
    });
  });
});
