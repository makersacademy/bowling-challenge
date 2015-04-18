Bowling Challenge
=================

[Use the app on Heroku - coming soon]()

![Bowling]()

Task:
-----
Count and sum the scores of a bowling game for one player (in JavaScript).

Tools:
------
This app was made using Jasmine for testing and Javascript for coding.

Development Blog:
-----------------
- [Day 1]()
- [Day 2]()

How To Run:
-----------
- You can follow the Heroku link at the top of this Readme for a live version of this app
- You can run the tests locally by typing `open SpecRunner.html` in the application's root folder
- You can launch a local version of the app by typing `ruby server.rb` in the application's root folder

Tests:
------
```sh
Bowling scoresheet
  rejects
    an illegal score

  knows the cumulative score for
    two non-spare/non-strike rolls
    a strike and a spare
    an unremarkable game
    a perfect game
    a gutter game
    an example game
```

### Optional Extra

Create a nice interactive animated interface with jQuery.
