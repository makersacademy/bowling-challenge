Bowling Calculator
=================

Bowling calculator allows users to calculate scores for Ten-Pin Bowling.

1. Create a player with a name

```rb
player = Player.new("player")
```

2. Add "roll_1" and "roll_2" for the current frame. use '10, "x"' to indicate a strike:

```rb
player.frame(roll_1, roll_2)

player.frame(4, 5)

player.frame(10, "x")
```

3. There are ten frames in a game of bowling. Scoring a spare  on frame 10 grants the player an extra roll. A strike on frame 10 results in two extra rolls.

4. After ten frames (plus bonus frame if applicable) the calculator will stop processing results. Reset the game to play again.

```rb
player.reset
```

**Technologies used**
- Javascript
- Jasmine


**Acknowledgements**

Breakdown of bowling scoring and test cases:
https://ncna-region.unl.edu/regional_2013_final.pdf
