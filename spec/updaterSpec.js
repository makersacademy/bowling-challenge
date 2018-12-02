var Updater = require('../src/updater.js');
var Frame = require('../src/frame.js');

describe("Updater", function() {

    beforeEach(function() {
      updater = new Updater();
      frames = [];
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(function(){
          frames.push(new Frame());
      });
    });

    it("is an instance of Game", function() {
      expect(updater).toEqual(jasmine.any(Updater));
    });


    it("can calculate a strike followed by a roll", function() {
        setFrameScore(10, 0, 0);
        setFrameScore(3, 6, 1);
        updater.update(frames);
        expect(frames[0].getFinalFrameScore()).toBe(19);
    });

    it("can calculate a spare followed by a regular roll", function() {
        setFrameScore(3, 7, 0);
        setFrameScore(4, 6, 1);
        updater.update(frames);
        expect(frames[0].getFinalFrameScore()).toBe(14);
    });

    it("calculate a strike followed by a strike", function(){
        setFrameScore(10, 0, 0);
        setFrameScore(10, 0, 1);
        setFrameScore(2, 3, 2);
        updater.update(frames);
        expect(frames[0].getFinalFrameScore()).toBe(22);
    });

    function setFrameScore(first, second = false, index){
        if (first < 10) {
            frames[index].setFirstScore(first);
            frames[index].setSecondScore(second);
        } else {
            frames[index].setFirstScore(first);
        }
    }
});

