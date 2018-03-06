
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

## Successes, Challenges, and Wish List:

# Successes

I am very pleased with the look and the functionality of the game, I had a lot of fun (and lost a lot of time) with the CSS! It was very rewarding to overcome the tricky logic of bowling and write a UI which prevents impossible rolls by hiding the buttons which would result in an impossible roll. I planned well and followed TDD to write each function and the tests were useful in debugging. Two of my wish list wishes have now been removed: The interface and game files have now been refactored to so that interface is only responsible for data coming from or being outputted to the browser and I used jQuery (rather than the original wish for ejs) to loop through repeated HTML such as the scorecard boxes and scoring buttons.

# Challenges

I really wanted to separate the Frame functions into another constructor file, I began to do this and separated the spec files as well, but was not able to get the module.exports to work! My interface jQuery is probably handling more logic than it should but I am struggling with how to separate it out as it is also the logic for what is displayed where on the screen. The addBonuses function feels clunky but I am not sure how to refactor it.

# Wish List

When I have more time I hope to:
* Do more research and use a separate module for Frame.
* In terms of the functionality of the UI, I'd hoped to display different background images or gifs for strikes, spares, gutter-balls and perfect games.
* Use Selenium for browser testing.
