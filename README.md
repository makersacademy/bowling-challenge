## Bowling Calculator

A javascript application created as a weekend challange at the 5th and 6th weekend (took me 4 days) of Makers Academy that allows you to count a score in a classic 10-pins bowling game, including all of the edge cases.

This one is my most important lesson-learned from Makers Academy - check out the Reflection paragraph.

## How to use the program.

1) Locally
```plain
$ git clone
```
then run the index.html in the browser

2) Online:
Go to http://bowling-calculator.surge.sh/

## Technology

* Front-end: Javascript, jQuery, HTML, CSS
* Back-end: Javascript
* Testing: Jasmine

## Design of code

##### Constructor Game
methods:

`frames` - array of pairs in bowling game: [1,1,2,2,3,3,...].
`pairs` - array of objects - each of them has a frame and a score of a particular roll( for example 1,9 - if 9 pins were knocked down in the first frame)
`isInProgress` - tells if the game is in progress.
`_lastFrame` - returns the last frame.
`_secondLastFrame` - returns the second last frame.
`_numberOfPairs` - returns the current number of pairs in the pairs array.
`_valueOfPair` - returns a number of knocked down pins in a particular pair.
`_addFrame` - adds a frame to the frames array.
`basicScore` - counts the number of pins knocked down.
`spares` - counts the points scored from spares.
`strikes` - counts the points scored from strikes.
`generalScore` - counts the general score.
`isStrike` - tells if a particular roll is a strike.
`_lessThan20` - tells if a number of frames is smaller than 20.
`_endGameSpare` - tells if there was a spare in the endgame (11th frame).
`isStrike` - tells if a particular roll is a strike.
`isStrike` - tells if a particular roll is a strike.

#####Constructor Player
methods:

`score` - score of a player.
`newGame` - starts a new game for a player.
`roll(number)` - adds a frame (or two if strike) to array of frames.
`_addToPairs(number)` - adds the rolled number to the array of pairs.
`countScore` - counts the general score.
`countBasicScore` - counts the basic score - number of knocked down pins.
`_valueOfPair` - returns a number of knocked down pins in a particular pair.
`_addFrame` - adds a frame to the frames array.
`basicScore` - counts the number of pins knocked down.
`displayBasicScore` - displays the score.
`_addEmptyPairWhenStrike` - adds empty pair when strike.

## Screenshots

Big screen

![See image](/readme_images/bow1.png)

Mobile

![See image](/readme_images/bow2.png)


## Reflection:

#### General thoughts

This was so far the most logically advanced challenge at makers so far and I must say - I've enjoyed it. It was a pleasure to think through the problem and look for the solution. After weeks of learning how to set up an app etc. - what is more 'technical' and less 'logical', I've welcomed a chance to stretch my brain. I also started to like JS during this one :)

Even though I've had fun and I've spend a lot of time diagramming and understanding various edge cases, it took me a few tries to achieve a perfect product. There were some details that I've overlooked on the first glance - especially the fact that the strike creates an empty frame - and it shouldn't have happened.

I've also made a mistake in design - it checks if there was a strike or spare by checking the future frames (I waits for them to happen) instead of checking the past frames. It prevented me from counting the final score as the game go. I've learned an important lesson during this task - if you think that your logic is complicated (and mine is) - something with your code is wrong and needs a new design.

Overall I'm very happy with this challenge. Completing it was very satisfying and I am proud of myself.

#### What went good:

1) completing the logic - indeed, counting bowling scores is harder than it appears.
2) looping html code in jQuery instead of writing tons of lines which are almost the same.
3) refactoring code (shorter methods both in model and jquery).
4) testing - I believe my tests cover all edge cases.
5) making the UI look good.

#### What went worse:

1) I should have created a separate class for a frame (2 rolls) to stash there the more complicated logic (e.g. was there a strike or spare, the number of points etc.) Unfortunately my game class ended up pretty long and on some point's too complicated.
2) I was unable to count the whole score (with strikes and spares) as the game went on, not only at the end. I think its because my methods were too complicated and it was hard to adapt them to constant refreshments.

#### If I had more time...

1) I would give myself a few days without this code, look on it with a fresh eye and energy, and create a new frame class. I think that my program can be faaaar better designed.
