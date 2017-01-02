```
             .-.
             \ /      .-.
             |_|  .-. \ /
             |=|  \ / |_|
            /   \ |_| |=|
           / (@) \|=|/   \
      ____ |     /   \@)  \
    .'    '.    / (@) \   |
   / #      \   |     |   |
  |     o o |'='|     |  /
   \     o  /    \   /'='
    '.____.'      '='

```


Bowling Challenge
=================

Task:
-----

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

How to install, test and use the game:
-------------------------------
```
$ git clone https://github.com/Unicornelia/bowling-challenge
$ cd bowling-challenge
$ open SpecRunner.html in browser (Chrome, Firefox etc.) -> tests are passing
$ open console (cmd + alt + j) and create Game, roll pins and calculate score) [e.g. game = new Game; game.roll(3); game.roll(4); etc. game.finalSum();]
```

Game interface:
--------------

![Screenshot](https://images/interface.png)
