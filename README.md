
Bowling Challenge
=================

## The Task

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

## Approach

I spent the first day and a half planning and researching how bowling is scored as well as diagramming. I pinned down my work into chapters:

0. Make the frame class capable of taking two rolls
1. Make a game class which can add the total of the frames without spares or strikes
2. Add spare logic
3. Add strike logic
4. Add the ~mysterious tenth round~
5. Do some jquery

### ... you didn't do 4

Had I had more time it would have been great to add in the final round. It's highly likely I would have made a FinalFrame class and instantiated it within Grame at the tenth frame. Putting the logic for it within the existing frame class seems pretty messy.

Also, my approach really limited my ability to easy map this onto a front end. I feel as if I should have started intertwining the front end with the business logic from the start rather than leaving them as two isolated steps.

### How to use

It's not complete, but you can always clone it and run it from the console if you're set on doing so!
