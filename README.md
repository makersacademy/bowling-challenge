Bowling Challenge
=================
## How to use  
`git clone git@github.com:chrisjgilbert/bowling-challenge.git`   
`open SpecRunner.html` to view the tests.  
If you want to fill in your scores...
```
game = new Game();   
game.roll(4);   
game.roll(6);   
game.roll(10);   
game.roll('X')  // fill in an 'X' after your strike!     
game.roll(4);
game.roll(5);  // keep going until you have played 10 frames!   
game.score();  // to return your score!   
```
