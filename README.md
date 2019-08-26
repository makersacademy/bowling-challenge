### Bowling

## Client Request
The client has requested a Bowling Scorecard. It will tally up the score throughout a game of bowling and keep record of each throw.

## User Stories
The game starts with a score of 0
```
As a player
So that I can start a game of Bowling
I want my score to begin at 0
```

After a frame the score is increased
```
As a player
After a frame of bowling
I want my score to increase
```

The current frame is displayed
```
As a player
So I know how long I have left to play
I want my current frame to be displayed
```

A Spare is indicated with /
```
As a player
After I score 10 in two throws
I want a spare to be shown as /
```

A Spare scores 10 points plus the score of the next throw
```
As a player
If I score a Spare
I want my score to increase by 10 plus the next throw
```

A Strike is indicated with X
```
As a player
After I score 10 in one throws
I want a spare to be shown as X
```

A Strike ends the frame
```
As a player
If I score a strike
I want the frame to end
```

A Strike scores 10 points plus the score of the next two throws
```
As a player
If I score a Strike
I want my score to increase by 10 plus the next two throws
```

There are 10 frames
```
As a player
So that I am not playing Bowling forever
I want a limit of 10 frames
```

The 10th frame is special
```
As a player
In case I score a Spare or Strike in frame 10
I want to continue to bowl to earn my bonus
```

A message will appear with the final score after the 10th frame
```
As a player
When I finish a game of Bowling
I want to receive a message showing my score
```

A message will appear with Gutter Game! if the player scores 20 0's
```
As a player
If I really mess up
I want to know about it
```

A message will appear with Perfect Game! if the player scores 12 Strikes
```
As a player
If I slam it out of the park
I want to know about it
```
