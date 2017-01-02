Bowling Challenge
=================
```

                         ! ! ! !
                      ." ! ! !  /
                    ."   ! !   /
                  ."     !    /
                ."           /
              ."     o      /
            ."             /
          ."              /
        ."               /
      ."      . '.      /
    ."      '     '    /
  ."                  /
."     0 |           /
       |/
      /|
      / |
```

### Instructions

* Clone and download this repo
* Open the SpecRunner.html with Google Chrome browser
* Open console and use the following:

  * Create a new game using ```game = new Bowling()```
  * Create new starting frame: ```game.newFrame()```
  * Enter your scores using: ```game.bowlScore([enter score here])```
  * To view the current frame: ```game.currentFrame```
  * To view the score sheet of completed frames: ```game.scoreSheet```
  * Once all bowls have been played in all frames, you will receive the message (Game over).


  * **Error Checking:**
    * If you enter an incorrect character you get a warning as such and need to re-enter an appropriate score.
    * If you enter a negative score you get a warning  you get a warning as such and need to re-enter an appropriate score.
    * If you enter a score higher than the available spares,  you get a warning as such and need to re-enter an appropriate score.
    * If you enter a score once the game is over you get a warning as such and the score is disregarded.


### TODO:

* Finish calculation of Strike score multipliers
* Resolve JSHint issues
* Add jQuery Interface.
