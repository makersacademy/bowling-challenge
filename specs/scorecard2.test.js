const TenthFrameSpecial = require('../lib/tenthframe');
const Frame = require('../lib/frame');
const ScoreCard = require('../lib/scorecard2');

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
                frameScore: 30
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
                frameScore: 30 
            },
            {
                number: 2,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 50 
            },
            {
                number: 3,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 60
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
                frameScore: 60 
            },
            {
                number: 3,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 80 
            },
            {
                number: 4,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 90
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
                frameScore: 60 
            },
            {
                number: 3,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 90
            },
            {
                number: 4,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 120
            },
            {
                number: 5,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 150
            },
            {
                number: 6,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 180
            },
            {
                number: 7,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 210
            },
            {
                number: 8,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 230
            },
            {
                number: 9,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 240
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
                frameScore: 60 
            },
            {
                number: 3,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 90
            },
            {
                number: 4,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 120
            },
            {
                number: 5,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 150
            },
            {
                number: 6,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 180
            },
            {
                number: 7,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 210
            },
            {
                number: 8,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 240
            },
            {
                number: 9,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 270
            },
            {
                number: 10,
                rolls: [10, 10, 10],
                type: 'strike',
                frameScore: 300
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
                frameScore: 14
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
                frameScore: 14
            },
            {
                number: 3,
                rolls: [6, 4],
                type: 'spare',
                frameScore: 24
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
                frameScore: 14
            },
            {
                number: 3,
                rolls: [6, 4],
                type: 'spare',
                frameScore: 29
            },
            {
                number: 4,
                rolls: [5, 5],
                type: 'spare',
                frameScore: 39
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
                frameScore: 14
            },
            {
                number: 3,
                rolls: [6, 4],
                type: 'spare',
                frameScore: 29
            },
            {
                number: 4,
                rolls: [5, 5],
                type: 'spare',
                frameScore: 49
            },
            {
                number: 5,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 59
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
                frameScore: 14
            },
            {
                number: 3,
                rolls: [6, 4],
                type: 'spare',
                frameScore: 29
            },
            {
                number: 4,
                rolls: [5, 5],
                type: 'spare',
                frameScore: 49
            },
            {
                number: 5,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 60
            },
            {
                number: 6,
                rolls: [0, 1],
                type: 'open',
                frameScore: 61
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
                frameScore: 14
            },
            {
                number: 3,
                rolls: [6, 4],
                type: 'spare',
                frameScore: 29
            },
            {
                number: 4,
                rolls: [5, 5],
                type: 'spare',
                frameScore: 49
            },
            {
                number: 5,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 60
            },
            {
                number: 6,
                rolls: [0, 1],
                type: 'open',
                frameScore: 61
            },
            {
                number: 7,
                rolls: [7, 3],
                type: 'spare',
                frameScore: 71
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
                frameScore: 14
            },
            {
                number: 3,
                rolls: [6, 4],
                type: 'spare',
                frameScore: 29
            },
            {
                number: 4,
                rolls: [5, 5],
                type: 'spare',
                frameScore: 49
            },
            {
                number: 5,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 60
            },
            {
                number: 6,
                rolls: [0, 1],
                type: 'open',
                frameScore: 61
            },
            {
                number: 7,
                rolls: [7, 3],
                type: 'spare',
                frameScore: 77
            },
            {
                number: 8,
                rolls: [6, 4],
                type: 'spare',
                frameScore: 87
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
                frameScore: 14
            },
            {
                number: 3,
                rolls: [6, 4],
                type: 'spare',
                frameScore: 29
            },
            {
                number: 4,
                rolls: [5, 5],
                type: 'spare',
                frameScore: 49
            },
            {
                number: 5,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 60
            },
            {
                number: 6,
                rolls: [0, 1],
                type: 'open',
                frameScore: 61
            },
            {
                number: 7,
                rolls: [7, 3],
                type: 'spare',
                frameScore: 77
            },
            {
                number: 8,
                rolls: [6, 4],
                type: 'spare',
                frameScore: 97
            },
            {
                number: 9,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 107
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
                frameScore: 14
            },
            {
                number: 3,
                rolls: [6, 4],
                type: 'spare',
                frameScore: 29
            },
            {
                number: 4,
                rolls: [5, 5],
                type: 'spare',
                frameScore: 49
            },
            {
                number: 5,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 60
            },
            {
                number: 6,
                rolls: [0, 1],
                type: 'open',
                frameScore: 61
            },
            {
                number: 7,
                rolls: [7, 3],
                type: 'spare',
                frameScore: 77
            },
            {
                number: 8,
                rolls: [6, 4],
                type: 'spare',
                frameScore: 97
            },
            {
                number: 9,
                rolls: [10, 0],
                type: 'strike',
                frameScore: 117
            },
            {
                number: 10,
                rolls: [2, 8, 6],
                type: 'spare',
                frameScore: 133
            }
        ])
        expect(scorecard.getGameTotal()).toBe(133);
    })
})
