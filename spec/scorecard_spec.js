"use strict";

describe("Scorecard", function() {
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

//it should print the points for each frame calculating bonuses

//if strikeOrSpare hides points of frames until bonus calculated:
// if strike, hides for 2 bowls (if strike strike, until second turn first bowl)
// if spare, hides until next bowl

//if strike shows 'X'
//if strike, hides score until no strikeOrSpare and adds following 2 bowls
//if strike and strike after, adds second following turn first bowl)

//if spare shows firstBowl and '/'
//if spare, hides score until no strikeOrSpare and adds 1 following bowl

});
