#### General

This program allows you to count a score in a classic 10-pins bowling game, including all of the edge cases.

#### How to use the program.

1) Locally
```plain
$ git clone
```
then run the index.html in the browser

2) Online
go to: http://bowling-calculator.surge.sh/

#### Technology

#### Classess, functions etc

#### Reflection:

## General thoughts

This was so far the most logically advanced challenge at makers so far and I must say - I've enjoyed it. It was a pleasure to think through the problem and look for the solution. After weeks of learning how to set up an app etc. - what is more 'technical' and less 'logical', I've welcomed a chance to stretch my brain. I also started to like JS during this one :)

Even though I've had fun and I've spend a lot of time diagramming and understanding various edge cases, it took me a few tries to achieve a perfect product. There were some details that I've overlooked on the first glance - especially the fact that the strike creates an empty frame - and it shouldn't have happened.

Overall I'm very happy with this challenge. Completing it was very satisfying and I am proud of myself.

## What went good:

1) completing the logic - indeed, counting bowling scores is harder than it appears.
2) looping html code in jQuery instead of writing tons of lines which are almost the same.
3) refactoring code (shorter methods both in model and jquery).
4) testing - I believe my tests cover all edge cases.
5) making the UI look nice :)

## What went worse:

1) I should have created a separate class for a frame (2 rolls) to stash there the more complicated logic (e.g. was there a strike or spare, the number of points etc.) Unfortunately my game class ended up pretty long and on some point's too complicated.
2) I was unable to count the whole score (with strikes and spares) as the game went on, not only at the end. I think its because my methods were too complicated and it was hard to adapt them to constant refreshments.

## If I had more time...

1) I would give myself a few days without this code, look on it with a fresh eye and energy, and create a new frame class. I think that my program can be faaaar better designed.
