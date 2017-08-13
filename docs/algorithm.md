Algorithm for calculateScore function of Game class
---

#### The Frame class is capable of the following

* Calculating its score via its own calculateScore method. However, since each frame does not know the other frames, it requires Game class to tell what the previous total is and what the bonus is.
* Telling whether a frame is Open, Spare or Strike

#### The Game  class calculates the scores as follows

1.  If only first roll has completed
      1. If previous frame exists and it is a Spare
        * calculate score on previous frame with current value of running total and bonus = current frame's first roll
        * update running total
1.  Else
      1. If previous frame exists and it is a Strike
        * calculate score on previous frame with current value of running total and bonus = current frame's first roll + current frame's second roll
        * update running total
      2. If current frame is Open
        * calculate score on current frame with current value of running total and bonus = 0

Note: Three strikes yet to be factored in
