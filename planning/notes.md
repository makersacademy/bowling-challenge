“start with the smallest, simplest constituent part, and build it up from there.”


DONE
- write a Frame class which can be used to keep track of a single frame of bowling. 
- Two rolls, a total score, and whether or not it was a strike or a spare

-  After this, make a bowling game which is just two frames. 
- You’ll need a Game class to keep track of the multiple frames. 

- The Game class should allow you to enter a roll, and it should work out which Frame to add that roll to.

- It also needs to be able to calculate a total score from all the frames in the game. 
- Ignore bonuses at first.


- Once you’ve got a scorecard working with two frames, try implementing the strike/spare bonuses, ignoring the final frame complexity.

- When the scorecard calculates the total score, there needs to be some way to calculate any bonuses from strikes and spares. 
- Think about whether this responsibility lies with the Frame class or the Scorecard class. If you decide to put it in the frame class
- what extra information would need to be provided as arguments so that the frame  could work it out?

- In this way, you build the solution up slowly, piece by piece. When you get to the step of implementing the final frame logic, if your Frame class and Scorecard class are simple enough, this problem will be easier to tackle. (edited) 