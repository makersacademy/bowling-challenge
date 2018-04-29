'use strict';

describe('Roll', function() {
 var roll;


 it('takes score, frame namber and roll number as argument\
 and returna a correct roll',function() {
   roll = new Roll(7,2,1)
   expect(roll.score).toEqual(7);
   expect(roll.frameNumber).toEqual(2);
   expect(roll.rollNumber).toEqual(1);
 });
});
