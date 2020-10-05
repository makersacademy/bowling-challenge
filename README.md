
Bowling Challenge
=================

This challenge will be completed with Javascript. Ruby logic is currently a place holder. 

# Instructions

## To get started

- Clone the repo 
- run `bundle`

## IRB

To use the scorecard, open IRB in your terminal

```
charlotte@Charlottes-MBP bowling-challenge % irb
2.7.0 :001 > 
```
 and run these commands in IRB.

 ```
2.7.0 :005 > require './lib/scorecard'
 => true 
 ```

 To start a scorecard:

 ```
2.7.0 :008 > game = ScoreCard.new
 => #<ScoreCard:0x00007fabbca6a800 @frames=[]> 
 ```

 To add a roll and how many pins were felled:

 ```
2.7.0 :009 > game.add_roll(2)
2.7.0 :012 > game.add_roll(6) 
 ```

 To see your total score;

 ```
2.7.0 :014 > game.total_score
 => 8 
 ```