# Bowling Challenge

### Approach

  To solve this challenge I started by wirting up the user stories. Once I had compeleted that I began setting up the project with Jasmine as a testing framework. Once that was comepleted I started TDD on the game class to set up a rough enviorment that could contain my frame class. I then proccedded witht the frame class  and created the most obvious functions first. From reading the rules of bowling scoring I figured the most difficult part would be handeling multiple strikes. I therefore focused on that challenge before creating more complex strutures in either class. I figured that the the more structure I when trying to handle strikes the more complex it will be to debug. By focusing on the strike logic first I would know that the bug is in the logic it self and not related to some automated handling of pin input. 

  Working on the strike logic once again proved why testing is amazing. I started of with a very large if/else combination. My thought was to create a working logic and to then refactore using my tests. I ended up splitting my strike logic into three small functions each not longer than three lines.

  Once the strike and spare logic were compelted I build the rest of the structure around them.The features included are:

### Features/Functions

#### Controller's

* Player Name - enterName
* Create game - new Game
* Enter first bowl - firstBowlPins (next frame automatic)
* Enter second bowl - secondBowlPins (completes game automatic)
* Score by frame - saveAllFrameScore
* Game total - totalScore

### Install

```
$ git clone https://github.com/ccfz/bowling-challenge.git
$ cd bowling-challenge
open Specrunner.html
```




