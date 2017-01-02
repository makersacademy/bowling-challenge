describe('Bowling', function() {
    var bowling;
    var game;
    var message;

    beforeEach(function() {
        game = new Bowling();
        game.newGame()
    });

    describe("#New()", function() {

        it("expects a score sheet to exist", function() {
            expect(game.scoreSheet).toBeDefined()
        });

        it("expects a frame to exist", function() {
            expect(game.currentFrame).toBeDefined()
        });

        it("expects a frame to have a max number of bowls", function() {
            expect(game.currentFrame.maxBowls).toEqual(2)
        });

        it("expects a frame to have spares", function() {
            expect(game.currentFrame.RemainingPins).toEqual(10)
        });

        it("checks that there can be maxmimum of twelve frames", function() {
            expect(game.maxFrames).toEqual(10)
        });

        it("expects a frame to have two throws", function() {
            game.bowlScore(7);
            game.bowlScore(1);
            expect(game.scoreSheet[0].maxBowls).toEqual(2)
        });

        describe("#Errors()", function() {

            it("expects a bowl is a number", function() {
                message = "your have not entered a number, try again"
                expect(function() {
                    game.bowlScore("a")
                }).toThrowError(message)
            });
            it("expects a bowl is a positive number", function() {
                message = "your have not entered a number between 0 and 10, try again"
                expect(function() {
                    game.bowlScore(-1)
                }).toThrowError(message)
            });

            it("expects a bowl is a number below 10", function() {
                message = "your have not entered a number between 0 and 10, try again"
                expect(function() {
                    game.bowlScore(11)
                }).toThrowError(message)
            });

            it("expects a throw only to be eqaul or lower than spares", function() {
                game.bowlScore(2);
                message = "Cannot score higher than available spares"
                expect(function() {
                    game.bowlScore(10)
                }).toThrowError(message)
            });
        });

    });

    describe("#Game()", function() {


        it("expects a frame throw count to reset to 1 after two throws in normal frame", function() {
            game.bowlScore(2);
            game.bowlScore(4);
            expect(game.currentFrame.bowlNumber).toEqual(1)
        });

        it("expects a score to be available in a frame", function() {
            game.bowlScore(3)
            game.bowlScore(6);
            expect(game.scoreSheet[0].score).toEqual(9)
        });

        it("expects a score to be recorded in a frame", function() {
            game.bowlScore(3)
            game.bowlScore(6);
            expect(game.scoreSheet[0].score).toEqual(9)
        });

        it("expects a frame to be saved once frame count = 0", function() {
            game.bowlScore(3)
            game.bowlScore(6);
            expect(game.scoreSheet.length).toEqual(1)
        });

        it("expects a frame to have a frame number", function() {
            game.bowlScore(1);
            expect(game.currentFrame.number).toEqual(1)
        });

        it("expects a frame to accept strike on first bowl", function() {
            game.bowlScore(10)
            expect(game.scoreSheet[0].strike).toBe(true)
        });

        it("expects a frame to accept strike on second bowl", function() {
            game.bowlScore(0)
            game.bowlScore(10)
            expect(game.scoreSheet[0].strike).toBe(false)
        });

        it("expects a strike to close and save the frame to the scoresheet", function() {
            game.bowlScore(10)
            expect(game.scoreSheet.length).toEqual(1)
            expect(game.currentFrame.number).toEqual(2)
        });

        describe("#Frame()", function() {

            it("checks that a maxmimum of 10 frames can be played if final bowl is not strike", function() {
                for (var i = 0; i < 11; i++) {
                    game.bowlScore(10)
                }
                game.bowlScore(1)
                message = "Game Over"
                expect(function() {
                    game.bowlScore(1)
                }).toThrowError(message)
            });

            it("checks that the 10th frame can have extra bowls if a strike occurs", function() {
                for (var i = 0; i < 10; i++) {
                    game.bowlScore(10)
                }
                expect(game.currentFrame.maxBowls).toEqual(3)
            });

            it("checks that the 10th frame can have extra bowls if a strike occurs and then game over", function() {
                for (var i = 0; i < 10; i++) {
                    game.bowlScore(10)
                }
                game.bowlScore(1)
                game.bowlScore(1)
                message = "Game Over"
                expect(function() {
                    game.bowlScore(1)
                }).toThrowError(message)
            });

            it("double the following two throws scores if a stike occurs", function() {
                for (var i = 0; i < 2; i++) {
                    game.bowlScore(10)
                }
                game.bowlScore(0)
                expect(game.scoreSheet[0].rollingScore).toEqual(20)
                expect(game.scoreSheet[1].rollingScore).toEqual(30)
            });

            it("sample game 1", function() {
                game.bowlScore(6)
                game.bowlScore(1)

                game.bowlScore(9)
                game.bowlScore(0)

                game.bowlScore(8)
                game.bowlScore(2)

                game.bowlScore(5)
                game.bowlScore(5)

                game.bowlScore(8)
                game.bowlScore(0)

                game.bowlScore(6)
                game.bowlScore(2)

                game.bowlScore(9)
                game.bowlScore(1)

                game.bowlScore(7)
                game.bowlScore(2)

                game.bowlScore(8)
                game.bowlScore(2)

                game.bowlScore(9)
                game.bowlScore(1)
                game.bowlScore(7)


                expect(game.scoreSheet[0].rollingScore).toEqual(7)
                expect(game.scoreSheet[1].rollingScore).toEqual(16)
                expect(game.scoreSheet[2].rollingScore).toEqual(31)
                expect(game.scoreSheet[3].rollingScore).toEqual(49)
                expect(game.scoreSheet[4].rollingScore).toEqual(57)
                expect(game.scoreSheet[5].rollingScore).toEqual(65)
                expect(game.scoreSheet[6].rollingScore).toEqual(82)
                expect(game.scoreSheet[7].rollingScore).toEqual(91)
                expect(game.scoreSheet[8].rollingScore).toEqual(110)
                expect(game.scoreSheet[9].rollingScore).toEqual(127)

            });


            xit("small sample game 2", function() {
                for (var i = 0; i < 3; i++) {
                    game.bowlScore(10)
                }
                game.bowlScore(0)
                game.bowlScore(1)
                expect(game.scoreSheet[0].rollingScore).toEqual(30)
                expect(game.scoreSheet[1].rollingScore).toEqual(50)
                expect(game.scoreSheet[2].rollingScore).toEqual(61)
                expect(game.scoreSheet[3].rollingScore).toEqual(62)
            });

            it("PERFECT game score to equal 300", function() {
                for (var i = 0; i < 12; i++) {
                    game.bowlScore(10)
                }
                expect(game.scoreSheet[9].rollingScore).toEqual(300)

            });


        });
    });
});
