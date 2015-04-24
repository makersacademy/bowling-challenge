Bowling Challenge
=================

[Use the app on Heroku - coming soon]()

![Bowling]()

Task:
-----
Count and sum the scores of a bowling game for one player (in JavaScript).

Tools:
------
For Testing:
- Jasmine
- Jasmine-Jquery

For Apllication Code:
- Javascript
- Jquery
- HTML
- CSS

Other:
- Sinatra

Development Blog:
-----------------
- [Day 1](http://sanjsanj.github.io/Week%205,%20Day%206/)
- [Day 2](http://sanjsanj.github.io/Week%205,%20Day%207/)
- [Day 3](http://sanjsanj.github.io/Week%206,%20Day%201/)
- [Day 4]()

How To Run:
-----------
- You can follow the Heroku link at the top of this Readme for a live version of this app
- You can launch a local version of the app by typing `ruby server.rb` in the application's root folder
- You can run the tests locally by typing `open SpecRunner.html` in the application's root folder

Tests:
------
```sh
Bowling scoresheet
  knows the cumulative score for
    two non-spare/non-strike rolls
    a strike and a spare
    an unremarkable game
    a perfect game
    a gutter game
    an example game

Interface
  has a title message
  has buttons to enter pins scored

Interface knows the running score tally for
  two non-spare/non-strike rolls
  a strike and a spare
  a game of all fours
  a perfect game
  a gutter game
  an example game
```
