# Bowling Challenge
## Makers Academy Week 5 Weekend Challenge

### What it Does
Keeps track of your ten pin bowling scores through the magic of JavaScript and jQuery!

### How to Use
Clone the repository and navigate to index.html in Chrome, then use the console to try commands:

```
game = new Game
game.frameArray[0].addFirstScore(5);
game.frameArray[0].addSecondScore(5);
game.frameArray[0]
Frame {idNumber: 1, firstScore: 5, secondScore: 5, frameTotal: 10, strike: null…}
finished: true
firstScore: 5
frameTotal: 10
idNumber: 1
secondScore: 5
spare: true
strike: null
```

### My Approach
I initially had to spend quite a lot of time figuring out how bowling is scored! I then decided that the best start would be to make a Frame object, and used my first weekend on the challenge trying to get it working as well as possible. Frame objects can have a first score and a second score added, will calculate a total score, designate a frame as a strike or spare as necessary and also mark a frame as complete. They're also instantiated with an argument (a number), which is added as the frame's ID.

I then hit a major roadblock when I decided to make a Game class, which took up most of the second weekend. After a lot of false starts and wrong approaches (plus a lengthy diversion into jQuery), I finally got a Game object to have ten Frame objects, and at the moment I'm trying to flesh this out a bit. I think the odds of this having a real interface by the end of the weekend is pretty slim :(

### Known Issues & TODOs
Frames can be a little glitchy with spares- often gives false positives here. Occasionally fails to mark a frame as finished too.

If I had more time I would have really liked to add more logic to the Game class, as right now a game can't really be properly scored or concluded. Some methods are a bit too longwinded and would definitely benefit from a refactor. I would also really like to make a proper interface with jQuery!
