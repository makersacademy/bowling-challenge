
Bowling Challenge
=================

In order to run the game and tests:

```
$ git clone git@github.com:l3w15/bowling-challenge.git
$ cd bowling-challenge
$ open SpecRunner.html
$ open bowling.html
```

You can then use the UI to either enter a full frame with each roll separated by commas, or enter a game roll by roll into the scorecard.

[![Screen_Shot_2018-03-06_at_17.31.09.png](https://s6.postimg.org/qzagwrxdd/Screen_Shot_2018-03-06_at_17.31.09.png)](https://postimg.org/image/yf9qikl2l/)

## Successes, Challenges, and Wish List:

# Successes

I am very pleased with the look and the functionality of the game, I had a lot of fun (and lost a lot of time) with the CSS! It was very rewarding to overcome the tricky logic of bowling and write a UI which prevents impossible rolls by hiding the buttons which would result in an impossible roll. I planned well and followed TDD to write each function and the tests were useful in debugging. Two of my wish list wishes have now been removed: The interface and game files have now been refactored to so that interface is only responsible for data coming from or being outputted to the browser and I used jQuery to loop through repeated HTML such as the scorecard boxes and scoring buttons. The addBonuses function feels has been refactored to make it somewhat clearer refactor it.

# Challenges

I really wanted to separate the Frame functions into another constructor file, I began to do this and separated the spec files as well, but struggled to implement the new constructor with the existing game class, and the existing interface.

# Wish List

When I have more time I hope to:
* Use my learning from this challenge in order to better follow the Single Responsibility Principle, so that Frame can be responsible for frames, Game for game functionality, and any other classes that seem appropriate.
* Do more research and use a separate constructor for Frame.
* Use Selenium for browser testing.
