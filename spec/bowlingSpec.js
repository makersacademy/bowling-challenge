'use strict'

describe('Bowling', function() {
  let bowl;

  beforeEach(function() {
    bowl = new Bowling();
  });

  it('starts with an empty array', function() {
    expect(bowl.score).toEqual([]);
  });

  it('adds to the array', function() {
    bowl.scoring(4);
    expect(bowl.score.length).toEqual(1);
  });

  describe('frame1', function() {
    it('gives the basic score', function() {
      bowl.scoring(4);
      bowl.scoring(4);
      expect(bowl.frame1()).toEqual(8);
    });

    it('checks and scores for a spare', function() {
      bowl.scoring(4);
      bowl.scoring(6);
      bowl.scoring(4);
      expect(bowl.frame1()).toEqual(14);
    });
  });

  describe('frame2', function() {
    it('gives the basic score', function() {
      for (let i = 0; i < 4; i++) {
        bowl.scoring(4);
      }
      expect(bowl.frame2()).toEqual(16);
    });

    it('checks and scores for a spare', function() {
      for (let i = 0; i < 3; i++) {
        bowl.scoring(4);
      }
      bowl.scoring(6);
      bowl.scoring(4);
      expect(bowl.frame2()).toEqual(22);
    });
  });

  describe('frame3', function() {
    it('gives the basic score', function() {
      for (let i = 0; i < 6; i++) {
        bowl.scoring(4);
      }
      expect(bowl.frame3()).toEqual(24);
    });

    it('checks and scores for a spare', function() {
      for (let i = 0; i < 5; i++) {
        bowl.scoring(4);
      }
      bowl.scoring(6);
      bowl.scoring(4);
      expect(bowl.frame3()).toEqual(30);
    });
  });

  describe('frame4', function() {
    it('gives the basic score', function() {
      for (let i = 0; i < 8; i++) {
        bowl.scoring(4);
      }
      expect(bowl.frame4()).toEqual(32);
    });

    it('checks and scores for a spare', function() {
      for (let i = 0; i < 7; i++) {
        bowl.scoring(4);
      }
      bowl.scoring(6);
      bowl.scoring(4);
      expect(bowl.frame4()).toEqual(38);
    });
  });

  describe('frame5', function() {
    it('gives the score for frame 5', function() {
      for (let i = 0; i < 10; i++) {
        bowl.scoring(4);
      }
      expect(bowl.frame5()).toEqual(40);
    });

    it('checks and scores for a spare', function() {
      for (let i = 0; i < 9; i++) {
        bowl.scoring(4);
      }
      bowl.scoring(6);
      bowl.scoring(4);
      expect(bowl.frame5()).toEqual(46);
    });
  });

  describe('frame6', function() {
    it('gives the basic score', function() {
      for (let i = 0; i < 12; i++) {
        bowl.scoring(4);
      }
      expect(bowl.frame6()).toEqual(48);
    });

    it('checks and scores for a spare', function() {
      for (let i = 0; i < 11; i++) {
        bowl.scoring(4);
      }
      bowl.scoring(6);
      bowl.scoring(4);
      expect(bowl.frame6()).toEqual(54);
    });
  });

  describe('frame7', function() {
    it('gives the basic score', function() {
      for (let i = 0; i < 14; i++) {
        bowl.scoring(4);
      }
      expect(bowl.frame7()).toEqual(56);
    });

    it('checks and scores for a spare', function() {
      for (let i = 0; i < 13; i++) {
        bowl.scoring(4);
      }
      bowl.scoring(6);
      bowl.scoring(4);
      expect(bowl.frame7()).toEqual(62);
    });
  });

  describe('frame8', function() {
    it('gives the basic score', function() {
      for (let i = 0; i < 16; i++) {
        bowl.scoring(4);
      }
      expect(bowl.frame8()).toEqual(64);
    });

    it('checks and scores for a spare', function() {
      for (let i = 0; i < 15; i++) {
        bowl.scoring(4);
      }
      bowl.scoring(6);
      bowl.scoring(4);
      expect(bowl.frame8()).toEqual(70);
    });
  });

  describe('frame9', function() {
    it('gives the basic score', function() {
      for (let i = 0; i < 18; i++) {
        bowl.scoring(4);
      }
      expect(bowl.frame9()).toEqual(72);
    });

    it('checks and scores for a spare', function() {
      for (let i = 0; i < 17; i++) {
        bowl.scoring(4);
      }
      bowl.scoring(6);
      bowl.scoring(4);
      expect(bowl.frame9()).toEqual(78);
    });
  });

  describe('frame10', function() {
    it('gives the basic score', function() {
      for (let i = 0; i < 20; i++) {
        bowl.scoring(4);
      }
      expect(bowl.frame10()).toEqual(80);
    });

    it('checks and scores for a spare', function() {
      for (let i = 0; i < 19; i++) {
        bowl.scoring(4);
      }
      bowl.scoring(6);
      bowl.scoring(4);
      expect(bowl.frame10()).toEqual(86);
    });
  });
});
