const score = require('./scoreCard')

 describe('score', () => {
    it('returns the score without bonuses', () => {
        const user = [
          [2, 7], 
          [4, 5], 
          [0, 9], 
          [5, 4],
          [3, 6],
          [1, 4],
          [8, 1], 
          [3, 5],
          [2, 6],
          [4, 3]
        ];
        expect(score(user)).toEqual(82);
      });

      it('returns the score with strike bonus', () => {
        const user = [
          [4, 3], 
          [10, 0],
          [2, 5]
        ];
        expect(score(user)).toEqual(31);
      });
   
      it('returns the score with spare bonus', () => {
        const user = [
          [9, 1],
          [5, 2],
          [4, 3]
        ];
        expect(score(user)).toEqual(29);
      });
    });