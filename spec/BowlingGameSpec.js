describe("Bowling Game", function() {
    let bowlingGame;

    beforeEach(function () {
        bowlingGame = new BowlingGame();
    });

    describe('Fresh scoring card...', function () {
        it("...is empty", function () {
            expect(bowlingGame.scoreCard).toEqual({});
        });
    });

    describe('#setFrame', function () {
        describe('standard scoring', function () {
            it("3, 4 in frame 1 will set bowl1 and bowl2 to 3 and 4 respectively in 1st frame of score card", function () {
                bowlingGame.setFrame(1, 3, 4);
                expect(bowlingGame.scoreCard[1].bowl1).toEqual(3);
                expect(bowlingGame.scoreCard[1].bowl2).toEqual(4);
            });

            it("8, 1 in frame 2 will set bowl1 and bowl2 to 8 and 1 respectively in 2nd frame of score card", function () {
                bowlingGame.setFrame(2, 8, 1);
                expect(bowlingGame.scoreCard[2].bowl1).toEqual(8);
                expect(bowlingGame.scoreCard[2].bowl2).toEqual(1);
            });

            it("0, 0 in frame 2 will set bowl1 and bowl2 to 0 and 0 respectively in 2nd frame of score card", function () {
                bowlingGame.setFrame(3, 0, 0);
                expect(bowlingGame.scoreCard[3].bowl1).toEqual(0);
                expect(bowlingGame.scoreCard[3].bowl2).toEqual(0);
            });
        });

        describe('Raising errors when breaking rules:', function() {
            describe('invalid frame numbers', function() {
                it("a frame number less than 1", function () {
                    expect(function () {
                        bowlingGame.setFrame(-1, 2, 3);
                    }).toThrowError("Frame number given not between 1 and 10");
                });

                it("a frame number of 0", function () {
                    expect(function () {
                        bowlingGame.setFrame(0, 2, 3);
                    }).toThrowError("Frame number given not between 1 and 10")
                });

                it("a frame number greater than 10", function () {
                    expect(function () {
                        bowlingGame.setFrame(11, 2, 3);
                    }).toThrowError("Frame number given not between 1 and 10")
                });
            });

            describe('invalid number of pins being bowled', function() {
                it("bowling less than 0 for bowl2", function () {
                    expect(function () {
                        bowlingGame.setFrame(4, 5, -3);
                    }).toThrowError("Each bowl needs to be between 0 and 10");
                });

                it("bowling more than 10 for bowl1", function () {
                    expect(function () {
                        bowlingGame.setFrame(6, 11, 3);
                    }).toThrowError("Each bowl needs to be between 0 and 10")
                });
            });

            describe('invalid when more than 10 pins bowled in frames 1 to 9', function() {
                it("bowling 8 and 9 in frame 9", function () {
                    expect(function () {
                        bowlingGame.setFrame(9, 8, 9);
                    }).toThrowError("Can only bowl 10 pins in frame's 1 to 9");
                });

                it("bowling more than 10 for bowl1", function () {
                    expect(function () {
                        bowlingGame.setFrame(5, 7, 7);
                    }).toThrowError("Can only bowl 10 pins in frame's 1 to 9")
                });
            });

            describe('bowling the 3rd bowl in a frame is invalid when...', function() {
                it("not frame 10, i.e bowling 4, 1, 1 in frame 8", function () {
                    expect(function () {
                        bowlingGame.setFrame(8, 4, 1,1);
                    }).toThrowError("Chance to bowl 3 times only in 10th frame and strike or spare gotten");
                });

                it("in frame 10 but bowl 1 or bowl 2 not a strike or spare", function () {
                    expect(function () {
                        bowlingGame.setFrame(10, 4, 5,1);
                    }).toThrowError("Chance to bowl 3 times only in 10th frame and strike or spare gotten");
                });
            });
        });

        describe('On the 10th frame...', function () {
            it("if first bowl is not a strike, error raised when bowl 1 and bowl 2 is more than 10", function () {
                expect(function () {
                    bowlingGame.setFrame(10, 9,5);
                }).toThrowError("Cannot bowl more than 10 pins unless first bowl is strike")
            });

            it("bowling a strike and a 7 will set bowl1 and bowl2 to 10 and 7 respectively for the 10th frame of score card", function () {
                bowlingGame.setFrame(10, 10, 7);
                expect(bowlingGame.scoreCard[10].bowl1).toEqual(10);
                expect(bowlingGame.scoreCard[10].bowl2).toEqual(7);
            });
        });

        describe('when strike scored', function () {
            it("strike in frame 1 will set bowl1 to 10 and strike to true in 1st frame of score card", function () {
                bowlingGame.setFrame(1, 10);
                expect(bowlingGame.scoreCard[1].bowl1).toEqual(10);
                expect(bowlingGame.scoreCard[1].strike).toBeTruthy();
            });

            it("strike in frame 1 will leave spare as false in 1st frame of score card", function () {
                bowlingGame.setFrame(1, 10);
                expect(bowlingGame.scoreCard[1].bowl1).toEqual(10);
                expect(bowlingGame.scoreCard[1].spare).toBeFalsy();
            });
        });

        describe('when spare scored', function () {
            it("spare in frame 3 will set bowl1 and bowl 2 to total 10 and spare to true in 1st frame of score card", function () {
                bowlingGame.setFrame(3, 6,4);
                expect(bowlingGame.scoreCard[3].bowl1).toEqual(6);
                expect(bowlingGame.scoreCard[3].bowl2).toEqual(4);
                expect(bowlingGame.scoreCard[3].spare).toBeTruthy();
            });

            it("spare in frame 3 will leave strike to stay false in 1st frame of score card", function () {
                bowlingGame.setFrame(3, 6,4);
                expect(bowlingGame.scoreCard[3].bowl1).toEqual(6);
                expect(bowlingGame.scoreCard[3].bowl2).toEqual(4);
                expect(bowlingGame.scoreCard[3].strike).toBeFalsy();
            });
        });
    });

    describe('#getScore', function () {
        it("returns 60 if bowled 3 for entire game", function () {
            for (let i = 0; i < 10; i++)
                bowlingGame.setFrame(i + 1, 3,3);
            bowlingGame.calcScore();
            expect(bowlingGame.score).toEqual(60);
        });


    });

});