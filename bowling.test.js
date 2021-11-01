const totalScore = require('./bowling');
 
describe("Bowling", () => {
    it('should be a gutter game"', () => {
      expect(totalScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(0);
    });

    it('should be a perfect 300 game"', () => {
      expect(totalScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10])).toBe(300);
    });

    it('10th frame ends on 2nd roll"', () => {
      expect(totalScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 4, 5])).toBe(262);
    });

    it('10th frame ends on 3rd roll"', () => {
      expect(totalScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 4, 6, 10])).toBe(274);
    });

    it('checks spares"', () => {
      expect(totalScore([9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,0])).toBe(180);
    });

    it('checks open 2nd frame"', () => {
      expect(totalScore([10, 3,1, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10])).toBe(258);
    });

})