Bowling Challenge
=================

###[Click Here - To use the app on Heroku](http://sanjbowl.herokuapp.com)

![Bowling](https://github.com/sanjsanj/sanjsanj.github.io/blob/master/images/week6_bowling.png?raw=true)

Task:
-----
Count and sum the scores of a bowling game for one player (in JavaScript)

Tools:
------
Testing:  Jasmine and Jasmine-JQuery

Application Code:  Javascript, JQuery, HTML and CSS

Other:  Sinatra and PHP

Development Blog:
-----------------
- [Day 1](http://sanjsanj.github.io/Week%205,%20Day%206/)
- [Day 2](http://sanjsanj.github.io/Week%205,%20Day%207/)
- [Day 3](http://sanjsanj.github.io/Week%206,%20Day%201/)
- [Day 4](http://sanjsanj.github.io/Week%206,%20Day%205/)

How To Run:
-----------
- You can follow the Heroku link at the top of the README for a live version of this app
- You can launch a local version of the app by typing `ruby server.rb` in the application's root folder
- You can run the tests locally by typing `open SpecRunner.html` in the application's root folder after starting the Ruby server

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

File Structure:
---------------
```sh
.
├── README.md
├── SpecRunner.html
├── home.html
├── index.php
├── lib
│   ├── jasmine-2.2.0
│   │   ├── boot.js
│   │   ├── console.js
│   │   ├── jasmine-html.js
│   │   ├── jasmine.css
│   │   ├── jasmine.js
│   │   └── jasmine_favicon.png
│   ├── jasmine-jquery.js
│   └── jquery.js
├── public
│   ├── bowling.jpg
│   ├── reset.css
│   └── stylesheet.css
├── server.rb
├── spec
│   ├── BowlingSpec.js
│   └── InterfaceSpec.js
└── src
    ├── Bowling.js
    └── Interface.js
```
