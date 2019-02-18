
Bowling Challenge
=================

### Working functionality

Notes:
* Spare = total 10 pins in frame
* Strike = 10 pins in first roll

Bonus points in game:
* Spare = add points of next roll to frame
* Strike = add points of next 2 rolls to frame

Illegal move:
* Show warning (and don't add roll) if 2nd roll is more than remaining standing pins

End of game:
* After frames complete show end of game message

Other:
* Using Jquery

### Outstanding

Bonus rounds -- needs fixing (and moving to object functionality)
* Extra roll for strike or spare in last frame
* Extra roll for strike in first bonus roll
* Total score accounts for these

Full game
* Add end of game notes for gutter game and perfect game
* Allow name entry and multiplayer

Other
* Set up [Travis CI](https://travis-ci.org) to run your tests.
* Add [ESLint](http://eslint.org/) to your codebase and make your code conform.
