# Bowling Challenge

#### Approach

  To solve this challenge, I started by writing up the user stories. Once I had completed that I began setting up the project with Jasmine as a testing framework. Once that was completed I started TDD on the game class to set up a rough environment that could contain my frame class. I then proceeded with the frame class and created the most obvious functions first. From reading the rules of bowling scoring I figured the most difficult part would be handling multiple strikes. I therefore focused on that challenge before creating more complex structures in either class. I figured that the the more structure I when trying to handle strikes the more complex it will be to debug. By focusing on the strike logic first I would know that the bug is in the logic it self and not related to some automated handling of pin input. 

  Working on the strike logic once again proved why testing is amazing. I started of with a very large if/else combination. My thought was to create a working logic and to then refactored using my tests. I ended up splitting my strike logic into three small functions each not longer than three lines.

  Once the strike and spare logic were completed I build the rest of the structure around them. As this project would ultimately have a user interface I excluded some automatic functions, which I would have added if it would have been a console interface only. For instance, rather than having to call first bowl and second bowl I would have just added a "enterNextPins" function. When creating the user interface I think having a bit more manual functions is more practical.

#### Features/Functions


* Player Name - enterName
* Create game - new Game
* Enter first bowl - firstBowlPins (next frame automatic)
* Enter second bowl - secondBowlPins (completes game automatic)
* Score by frame - saveAllFrameScore
* Game total - totalScore

#### Install

```
$ git clone https://github.com/ccfz/bowling-challenge.git
$ cd bowling-challenge
open Specrunner.html
```





