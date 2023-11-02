const TenthFrameSpecial = require('./tenthframe');
const Frame = require('./frame');
const ScoreCard = require('./scorecard2');

// INTEGRATION TESTS:
describe('Scorecard - Gutter Game', () => {
    // arrange
    const scorecard = new ScoreCard()

    test('Frame 1: [0,0]', () => {
        scorecard.addFrame(new Frame(0, 0));
        expect(scorecard.showScoreCard()).toEqual([
            {
                number: 1,
                rolls: [0, 0],
                type: 'open',
                frameScore: 0
            }
        ])
        expect(scorecard.getGameTotal()).toBe(0)
    })
    test('Frame 2-9: [0,0]', () => {
        scorecard.addFrame(new Frame(0, 0));
        scorecard.addFrame(new Frame(0, 0));
        scorecard.addFrame(new Frame(0, 0));
        scorecard.addFrame(new Frame(0, 0));
        scorecard.addFrame(new Frame(0, 0));
        scorecard.addFrame(new Frame(0, 0));
        scorecard.addFrame(new Frame(0, 0));
        scorecard.addFrame(new Frame(0, 0));

        expect(scorecard.showScoreCard()).toEqual([
            {
                number: 1,
                rolls: [0, 0],
                type: 'open',
                frameScore: 0
            },
            {
                number: 2,
                rolls: [0, 0],
                type: 'open',
                frameScore: 0
            },
            {
                number: 3,
                rolls: [0, 0],
                type: 'open',
                frameScore: 0
            },
            {
                number: 4,
                rolls: [0, 0],
                type: 'open',
                frameScore: 0
            },
            {
                number: 5,
                rolls: [0, 0],
                type: 'open',
                frameScore: 0
            },
            {
                number: 6,
                rolls: [0, 0],
                type: 'open',
                frameScore: 0
            },
            {
                number: 7,
                rolls: [0, 0],
                type: 'open',
                frameScore: 0
            },
            {
                number: 8,
                rolls: [0, 0],
                type: 'open',
                frameScore: 0
            },
            {
                number: 9,
                rolls: [0, 0],
                type: 'open',
                frameScore: 0
            }
        ])
    })
    test('Frame 10', () => {
        scorecard.addFrame(new Frame(0, 0));
        expect(scorecard.showScoreCard()).toEqual([
            {
                number: 1,
                rolls: [0, 0],
                type: 'open',
                frameScore: 0
            },
            {
                number: 2,
                rolls: [0, 0],
                type: 'open',
                frameScore: 0
            },
            {
                number: 3,
                rolls: [0, 0],
                type: 'open',
                frameScore: 0
            },
            {
                number: 4,
                rolls: [0, 0],
                type: 'open',
                frameScore: 0
            },
            {
                number: 5,
                rolls: [0, 0],
                type: 'open',
                frameScore: 0
            },
            {
                number: 6,
                rolls: [0, 0],
                type: 'open',
                frameScore: 0
            },
            {
                number: 7,
                rolls: [0, 0],
                type: 'open',
                frameScore: 0
            },
            {
                number: 8,
                rolls: [0, 0],
                type: 'open',
                frameScore: 0
            },
            {
                number: 9,
                rolls: [0, 0],
                type: 'open',
                frameScore: 0
            },
            {
                number: 10,
                rolls: [0, 0],
                type: 'open',
                frameScore: 0
            }

        ])
    })
    
})


describe('Scorecard - Perfect Game', () => {
    // arrange
    const scorecard = new ScoreCard()
    test('Frame 1: [10,0]', () => {
        scorecard.addFrame(new Frame(10,0));
        expect(scorecard.showScoreCard()).toEqual([
            {
                number: 1,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 10
            }
        ])
        expect(scorecard.getGameTotal()).toBe(10)
    })
    test('Frame 2: [10,0]', () => {
        secondFrame = new Frame(10,0)
        scorecard.addFrame(secondFrame);
        expect(scorecard.showScoreCard()).toEqual([
            {
                number: 1,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 20 
            },
            {
                number: 2,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 10
            }
        ])
        expect(scorecard.getGameTotal()).toBe(30)
    })
    test('Frame 3: [10,0]', () => {
        scorecard.addFrame(new Frame(10,0));
        expect(scorecard.showScoreCard()).toEqual([
            {
                number: 1,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 30 // returns 20 right now
            },
            {
                number: 2,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 20 // returns 30 right now
            },
            {
                number: 3,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 10
            }
        ])
        expect(scorecard.getGameTotal()).toBe(60)
    })

    test('Frame 4: [10,0]', () => {
        scorecard.addFrame(new Frame(10,0));
        expect(scorecard.showScoreCard()).toEqual([
            {
                number: 1,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 30 
            },
            {
                number: 2,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 30 
            },
            {
                number: 3,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 20 // returns 30 right now
            },
            {
                number: 4,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 10
            }
        ])
        expect(scorecard.getGameTotal()).toBe(90)
    })

    test('Frames 5-9: [10,0]', () => {
        scorecard.addFrame(new Frame(10,0));
        scorecard.addFrame(new Frame(10,0));
        scorecard.addFrame(new Frame(10,0));
        scorecard.addFrame(new Frame(10,0));
        scorecard.addFrame(new Frame(10,0));

        expect(scorecard.showScoreCard()).toEqual([
            {
                number: 1,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 30 
            },
            {
                number: 2,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 30 
            },
            {
                number: 3,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 30
            },
            {
                number: 4,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 30
            },
            {
                number: 5,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 30
            },
            {
                number: 6,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 30
            },
            {
                number: 7,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 30
            },
            {
                number: 8,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 20
            },
            {
                number: 9,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 10
            }
        ])
        expect(scorecard.getGameTotal()).toBe(240)
    })
    test('Frames 10: [10, 10, 10]', () => {
        scorecard.addFrame(new TenthFrameSpecial(10,10,10));

        expect(scorecard.showScoreCard()).toEqual([
            {
                number: 1,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 30 
            },
            {
                number: 2,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 30 
            },
            {
                number: 3,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 30
            },
            {
                number: 4,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 30
            },
            {
                number: 5,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 30
            },
            {
                number: 6,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 30
            },
            {
                number: 7,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 30
            },
            {
                number: 8,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 30
            },
            {
                number: 9,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 30
            },
            {
                number: 10,
                rolls: [10, 10, 10],
                type: 'strike',
                frameScore: 30
            }

        ])
        expect(scorecard.getGameTotal()).toBe(300)
    })
})



describe('Scorecard - Example Game', () => {
    // arrange
    const scorecard = new ScoreCard()

    test('Frame 1-2: [1, 4], [4, 5]', () => {
        // Frame 1
        scorecard.addFrame(new Frame(1, 4));
        expect(scorecard.showScoreCard()).toEqual([
            {
                number: 1,
                rolls: [1, 4],
                type: 'open',
                frameScore: 5
            }
        ])
        expect(scorecard.getGameTotal()).toBe(5)
        // Frame 2
        scorecard.addFrame(new Frame(4, 5));
        expect(scorecard.showScoreCard()).toEqual([
            {
                number: 1,
                rolls: [1, 4],
                type: 'open',
                frameScore: 5
            },
            {
                number: 2,
                rolls: [4, 5],
                type: 'open',
                frameScore: 9
            }
        ])
        expect(scorecard.getGameTotal()).toBe(14)
    })
    
    test('Frame 3-6: [6,4], [5, 5], [10,0], [0, 1]', () => {
        // Frame 3
        scorecard.addFrame(new Frame(6, 4));
        expect(scorecard.showScoreCard()).toEqual([
            {
                number: 1,
                rolls: [1, 4],
                type: 'open',
                frameScore: 5
            },
            {
                number: 2,
                rolls: [4, 5],
                type: 'open',
                frameScore: 9
            },
            {
                number: 3,
                rolls: [6, 4],
                type: 'spare',
                frameScore: 10
            }
        ])
        expect(scorecard.getGameTotal()).toBe(24)

        // Frame 4
        scorecard.addFrame(new Frame(5, 5));
        expect(scorecard.showScoreCard()).toEqual([
            {
                number: 1,
                rolls: [1, 4],
                type: 'open',
                frameScore: 5
            },
            {
                number: 2,
                rolls: [4, 5],
                type: 'open',
                frameScore: 9
            },
            {
                number: 3,
                rolls: [6, 4],
                type: 'spare',
                frameScore: 15
            },
            {
                number: 4,
                rolls: [5, 5],
                type: 'spare',
                frameScore: 10
            }
        ])
        expect(scorecard.getGameTotal()).toBe(39);

        // Frame 5
        scorecard.addFrame(new Frame(10, 0));
        expect(scorecard.showScoreCard()).toEqual([
            {
                number: 1,
                rolls: [1, 4],
                type: 'open',
                frameScore: 5
            },
            {
                number: 2,
                rolls: [4, 5],
                type: 'open',
                frameScore: 9
            },
            {
                number: 3,
                rolls: [6, 4],
                type: 'spare',
                frameScore: 15
            },
            {
                number: 4,
                rolls: [5, 5],
                type: 'spare',
                frameScore: 20
            },
            {
                number: 5,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 10
            }
        ])
        expect(scorecard.getGameTotal()).toBe(59);

        // Frame 6
        scorecard.addFrame(new Frame(0, 1));
        expect(scorecard.showScoreCard()).toEqual([
            {
                number: 1,
                rolls: [1, 4],
                type: 'open',
                frameScore: 5
            },
            {
                number: 2,
                rolls: [4, 5],
                type: 'open',
                frameScore: 9
            },
            {
                number: 3,
                rolls: [6, 4],
                type: 'spare',
                frameScore: 15
            },
            {
                number: 4,
                rolls: [5, 5],
                type: 'spare',
                frameScore: 20
            },
            {
                number: 5,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 11
            },
            {
                number: 6,
                rolls: [0, 1],
                type: 'open',
                frameScore: 1
            }
        ])
        expect(scorecard.getGameTotal()).toBe(61);
    })

    test('Frame 7-9: [7,3], [6,4], [10,0]', () => {
        // Frame 7
        scorecard.addFrame(new Frame(7,3));
        expect(scorecard.showScoreCard()).toEqual([
            {
                number: 1,
                rolls: [1, 4],
                type: 'open',
                frameScore: 5
            },
            {
                number: 2,
                rolls: [4, 5],
                type: 'open',
                frameScore: 9
            },
            {
                number: 3,
                rolls: [6, 4],
                type: 'spare',
                frameScore: 15
            },
            {
                number: 4,
                rolls: [5, 5],
                type: 'spare',
                frameScore: 20
            },
            {
                number: 5,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 11
            },
            {
                number: 6,
                rolls: [0, 1],
                type: 'open',
                frameScore: 1
            },
            {
                number: 7,
                rolls: [7, 3],
                type: 'spare',
                frameScore: 10
            }
        ])
        expect(scorecard.getGameTotal()).toBe(71);

        // Frame 8
        scorecard.addFrame(new Frame(6, 4));
        expect(scorecard.showScoreCard()).toEqual([
            {
                number: 1,
                rolls: [1, 4],
                type: 'open',
                frameScore: 5
            },
            {
                number: 2,
                rolls: [4, 5],
                type: 'open',
                frameScore: 9
            },
            {
                number: 3,
                rolls: [6, 4],
                type: 'spare',
                frameScore: 15
            },
            {
                number: 4,
                rolls: [5, 5],
                type: 'spare',
                frameScore: 20
            },
            {
                number: 5,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 11
            },
            {
                number: 6,
                rolls: [0, 1],
                type: 'open',
                frameScore: 1
            },
            {
                number: 7,
                rolls: [7, 3],
                type: 'spare',
                frameScore: 16
            },
            {
                number: 8,
                rolls: [6, 4],
                type: 'spare',
                frameScore: 10
            }

        ])
        expect(scorecard.getGameTotal()).toBe(87);


        // Frame 9
        scorecard.addFrame(new Frame(10, 0));
        expect(scorecard.showScoreCard()).toEqual([
            {
                number: 1,
                rolls: [1, 4],
                type: 'open',
                frameScore: 5
            },
            {
                number: 2,
                rolls: [4, 5],
                type: 'open',
                frameScore: 9
            },
            {
                number: 3,
                rolls: [6, 4],
                type: 'spare',
                frameScore: 15
            },
            {
                number: 4,
                rolls: [5, 5],
                type: 'spare',
                frameScore: 20
            },
            {
                number: 5,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 11
            },
            {
                number: 6,
                rolls: [0, 1],
                type: 'open',
                frameScore: 1
            },
            {
                number: 7,
                rolls: [7, 3],
                type: 'spare',
                frameScore: 16
            },
            {
                number: 8,
                rolls: [6, 4],
                type: 'spare',
                frameScore: 20
            },
            {
                number: 9,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 10
            }
        ])
        expect(scorecard.getGameTotal()).toBe(107);
    })

    test('Frame 10: [2, 8, 6]', () => {
        // Frame 10
        scorecard.addFrame(new TenthFrameSpecial(2, 8, 6));
        expect(scorecard.showScoreCard()).toEqual([
            {
                number: 1,
                rolls: [1, 4],
                type: 'open',
                frameScore: 5
            },
            {
                number: 2,
                rolls: [4, 5],
                type: 'open',
                frameScore: 9
            },
            {
                number: 3,
                rolls: [6, 4],
                type: 'spare',
                frameScore: 15
            },
            {
                number: 4,
                rolls: [5, 5],
                type: 'spare',
                frameScore: 20
            },
            {
                number: 5,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 11
            },
            {
                number: 6,
                rolls: [0, 1],
                type: 'open',
                frameScore: 1
            },
            {
                number: 7,
                rolls: [7, 3],
                type: 'spare',
                frameScore: 16
            },
            {
                number: 8,
                rolls: [6, 4],
                type: 'spare',
                frameScore: 20
            },
            {
                number: 9,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 20
            },
            {
                number: 10,
                rolls: [2, 8, 6],
                type: 'spare',
                frameScore: 16
            }
        ])
        expect(scorecard.getGameTotal()).toBe(133);
    })
})
