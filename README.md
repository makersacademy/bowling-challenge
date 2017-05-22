quick self review:

Should have full back-end functionality.
All tests passing (at the moment).

BUT:

TotalScoreCalculator.js doesn't have any written tests; it also needs some serious refactoring as some methods are overly long.
Another caveat is while frame scoring does end (limited as it is to 10 hardcoded frames), it is possible to keep rolling the bowling ball and take 'bowlsLeft' into negative figures...

Other considerations:

With the exception of the TotalScoreCalculator, I attempted to hold to single concern/responsibility principles but I think that I might have ended up creating a system which holds too much/repeated data - bowlsRecord, Scorebowl array, TSC-scorecard.

Missing:

An Overall Game function that will initiate a new game - at this moment in time, to run the game, one needs to mount the Jasmine Spec Runner on Google Chrome and do the following in the console to initiate the game:-

      bowlsTracker = new BowlsTracker();
      pins = new Pins();
      bowlingBall = new BowlingBall();
      scoreBowl = new ScoreBowl();
      totalScoreCalculator = new TotalScoreCalculator()
      
Then use the following to roll:

      bowlingBall.roll(pins, bowlsTracker, "insert amount of pins knocked down here ( 0 - 10 )", scoreBowl)


Fin!
