
Bowling Scorer Challenge
=================
Solo weekend challenge at the end of week 5 of Makers (to be continued for a second weekend). Week 5 is new language week and the first time we have tried Javascript.

By the end of week 5 all developers can:

- Test drive a simple front-end web app with Javascript
- Follow an effective process for learning a new language

Workflow:
-------

*Screenshots to follow*

Progress Update:
--------

- [x] Business rules identified and tests created  
- [x] Solution 1 referred to as Ugly Solution
- [x] Soultion 2 referred to as the Neat or Uncle Bob Solution

The Ugly Solution
------
I thought I was on to a winner with this approach. 
I captured all the throws in frame sequence using both a rollHistory array and a frameHistory array. I knew I didn't need both but I thought they may come in handy for the GUI interface.  
The frameHistory gave an output like this:  
`[10,0][10,0][3,7][0,0][10,0][10,0][3,7][0,0][2,8][10,10,10]`  
I thought this was pretty cool but when I came to deal with the scoring for the final frame I ended up falling into a quagmnire of if, else if and else statements. Yuk!
It does work though and I learned plenty....

The Neat Solution
------
Heavily inspired by Uncle Bob (whoever he is?).  
This differs initially by holding an rollHistory array that only contains actual rolls. It isn't as visually expressive as my rollHistory array but having this enables me to calculate the spare and strike bonus without getting fixated on the frame number and it's vicinity to the final frame.  
It's a super cool solution.

*Uncles Bob's rules:*  
- Test 1: testGutterGame()  
- Test 2: testAllOnes()  
- Test 3: testOneSpare() 
- Test 4: testOneStrike() 
- Test 5: testPerfectGame() 


*Disclaimer: This uses the [Uncle Bob Bowling Game Kata](http://www.butunclebob.com/ArticleS.UncleBob.TheBowlingGameKata) for inspiration. It's written in Java, but that is very similar to JavaScript*  

Next Steps:
--------
- [ ] More tests to protect from edge cases. Eg. second roll of frame shouldn't allow frame total to exceed 10  
- [ ] Prevent user from rolling more than 10 frames - basically an end game catcher  
- [ ] GUI developed


## Original Task Instructions:

**THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD. DO NOT GENERATE RANDOM ROLLS. THE USER INPUTS THE ROLLS.**

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

___STRONG HINT, IGNORE AT YOUR PERIL:___ Bowling is a deceptively complex game. Careful thought and thorough diagramming — both before and throughout — will save you literal hours of your life.

### Optional Extras

In any order you like:

* Create a nice interactive animated interface with jQuery.
* Set up [Travis CI](https://travis-ci.org) to run your tests.
* Add [ESLint](http://eslint.org/) to your codebase and make your code conform.

## Bowling — how does it work?

### Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

### 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

### Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)
