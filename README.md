# Ten Pin Bowling - Online!

A Bowling scorecard written in JavaScript, CSS and HTML.

## Learning the rules

The bowling rules are a bit of a brain teaser at first. It was fun putting together the logic in JS to do the calculations.

I used TDD via Jasmine. I started by writing tests for a gutter game, game of ones and finally a perfect game. Although there were edge cases, I found once the perfect game was conquered the rest rolled into place.

## How to play

To play, just clone this repository and open public/index.html. If you do go on to achieve a perfect game, a partying bowler will be displayed.

If you would like to play again (likely), no need to refresh. Just press the bowling ball and the game will restart.


## In action

![alt test](/images/the-perfect-game.gif)

## To be added

I would like to remove the option of knocking down more pins than what exist. For example, if the player get seven on the first throw of a frame, only one to three would be available on the next go.

I used bootstrap for the layout of the page. There are areas in the styling I would like to improve: scorecard and the white space at the bottom of the page would be the first to be updated. 
