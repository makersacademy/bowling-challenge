[![Build Status](https://travis-ci.org/dpwdec/bowling-challenge.png?branch=master)](https://travis-ci.org/dpwdec/bowling-challenge)

# Bowling Scorecard

```
As a player
So that I can record my roll score
I want to be able to enter what I scored in the first roll

As a player
So that I can record for my basic score for a frame
I want to able to enter what I scored in the second roll

As a player
So that I can record a full bowling game
I want to be able to enter scores for multiple rounds

As a player
So that I can see my score described accurately
I want the scoreboard to register strikes as [X] and spares as [/]

As a player
So that my score can be accurately calculated
I want subsquent bonus rolls to be accurately added to my score

As a player
So that I can record my perfect bowling games
I want to be able to record two bonus rolls if I score a strike on frame 10
```

# Objects

| object | message |
| --- | --- |
| Frame | firstRoll |
| | secondRoll |
| | total |
| | update()
| | addBonus() |

| object | message |
| --- | --- |
| Game | currentFrame |
| | currentRoll |
| | round |

| object | message |
| --- | --- |
| Roll | score |
| | printScore() |