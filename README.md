
Bowling Challenge
=================

This is my attempt at solving the Bowling challenge for Week 5 of Makers Apprenticeship.


What works?

The JavaScript code lets a user enter its roll score. It works for 0-9 but I didn't implement the spare and strike rules yet.

I have an array that calculates the sum of all the rolls. I did not implement how to calculate the sum of the frame as I got stuck. I was thinking about adding either a hash in javascript {first_roll: 10pts; second_roll: 5; etc...} or an array of array but I didn't have time to implement this yet.

The game calculates the rolls and the frames. The code recognises that if you do a strike you don't have a second role. The game doesn't know about the 10th frame rules.

I've implemented a simple html/jQuery page to make the game more visible.


To do:
- Try nested array for the total sum or a hash.
- Stop the game when it reached 10 rounds.
- Update score when strike/spare.
- jQuery of input of the rolls score.
- You can only score the remaining pins (if score is 4 - then max score is 6 )

More information/instructions:

**THIS IS NOT A BOWLING GAME, IT IS A BOWLING SCORECARD. DO NOT GENERATE RANDOM ROLLS. THE USER INPUTS THE ROLLS.**

It counts and sums the scores of a bowling game for one player (in JavaScript). A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

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

### User stories:

User stories:
As a player,
So I can have fun,
I can enter my score of roll. --done

As a player,
So I know when to stop,
I can count the frame --done

As a player,
So I know when to stop,
I can count the roll  -- done

As a player,
So I can be average again,
I can enter a second roll in the same frame unless my first roll was a 10. --done

As a player,
So I can brag, I want to see the score of my frame and the total.

As a player,
So I can be average,
If my score is not equal to 10 and my roll isn’t a strike, add the two rolls. --done


As a player
So I know I win at life
When I hit 10, I have a strike and my frame closes. -- done

As a player,
So I get my points calculated properly,
My frame is not calculated until the next turn is then is equal to 10 + sum of next frame unless I strike again. Be careful when strike after strike (max score 300)

As a player,
So I can lose hard ouch,
If my total score is 0 at the end, say “Gutter Game”.

As a player,
So I get my points calculated properly,
If the sum of the two rounds is 10, my score isn’t calculated until the next roll of the next round, the sum is 10 + roll1_score

As a player,
So I can finish properly on round 10,
If I get a spare or a strike, I can roll the extra balls but never more than 3.

10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).
