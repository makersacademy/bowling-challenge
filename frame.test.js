const Frame = require('./frame');

describe('Frame', () => {

    it ('can rolls pins', () => {
      const newFrame = new Frame();
      newFrame.roll(3); 
      expect(newFrame.frame).toEqual ([3]);
      expect(newFrame.rollCount).toEqual (1);
    });

    it ('can roll a standard roll', () => {
      const newFrame = new Frame();
      newFrame.roll(3); 
      newFrame.roll(3);
      expect(newFrame.frame).toEqual ([3,3]);
      expect(newFrame.rollCount).toEqual (2);
      expect(newFrame.standard()).toBeTruthy();
    });

    it ('can negate a standard roll', () => {
      const newFrame = new Frame();
      newFrame.roll(10);   
        expect(newFrame.standard()).toBeFalsy();
     });

     it ('can negate a standard roll', () => {
        const newFrame = new Frame();
        newFrame.roll(1);
        newFrame.roll(9);    
        expect(newFrame.standard()).toBeFalsy();
     });

    it ('can roll a strike', () => {
        const frame = new Frame();
        frame.roll(10);  
        expect(frame.strike()).toBeTruthy();
    });

    it ('can roll a not roll a strike', () => {
        const frame = new Frame();
        frame.roll(1); 
        expect(frame.strike()).toBeFalsy();
    });

    it ('can complete a frame', () => {
        const frame = new Frame();
        frame.roll(10);
        console.log(frame.complete());
        expect(frame.complete()).toBeTruthy();
    });

    it ('can not complete a frame', () => {
        const frame = new Frame();
        frame.roll(1); 
        expect(frame.complete()).toBeFalsy();
    });

    it ('can roll a spare', () => {
        const frame = new Frame();
        frame.roll(1);
        frame.roll(9);
        expect(frame.spare()).toBeTruthy();
    });
    
    it ('can negate a spare', () => {
        const frame = new Frame();
        frame.roll(1);
        frame.roll(2); 
        expect(frame.spare()).toBeFalsy();
    });
}); 