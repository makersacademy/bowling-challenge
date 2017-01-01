
Bowling Challenge [![Build Status](https://travis-ci.org/TudorTacal/bowling-challenge.svg?branch=master)](https://travis-ci.org/TudorTacal/bowling-challenge)
=================

This project represents the fifth and sixth weekend challenge at Makers Academy coding bootcamp.

The app counts and sums the scores of a bowling game for one player. The logic was written following Uncle Bob's [bowling kata](http://butunclebob.com/ArticleS.UncleBob.TheBowlingGameKata).

It was challenging to implement the interface with this particular business logic. Because the program is calculating correctly the score once all the rolls are played but it wasn't designed to show the score in real time.

## Installation and use

1. Clone or download the repository.
2. Open **index.html** and press **Roll** to use the interface.
3. Alternatively open the **Console**, create a new game and use the *roll* method to specify the number of pins knocked down. After 20 rolls call the *score* method to calculate and see the score.
```
game = new Game();
game.roll(7);
game.roll(10);
game.roll(3);
..............
game.score();
```
Run the tests by opening **SpecRunner.html**


## Screenshots

![Interface](https://s29.postimg.org/gjockbswn/Screen_Shot_2017_01_01_at_13_37_26.png)

## Technologies used

* **JavaScript**
* **Jasmine** for testing.
* **JQuery** for the interactive interface.
* **HTML5** and **CSS3** and [Codepen](http://codepen.io/) for design.

## Future work

The interface is still not perfect in displaying the knocked down pins and frames. Work in progress to get that fixed.

## Contacts
tudor.tacal@gmail.com
