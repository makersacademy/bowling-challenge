
Bowling Challenge
=================

This challenge marks my first foray into logical programming with JavaScript. The previous weekend, with Ruby, I fell into a hole when trying to figure the bonus additions of points following strikes and spares. However, this weekend I'm pleased to present a complete, fully-fledged programme for scoring bowling.

My initial thoughts with Ruby lead me to something resembling this:
![ruby bowling attempt](https://imgur.com/a/4eUIrDR)

My inititial code managed to calculate the scores of a gutter-game, a perfect-game, and a "one-er" (all 1s) game. But when it came to stringing spares and strikes, the code I had written was fundamentally wrong, and otherwise highly convoluted. The original ruby challenge lead me to researching the proper methodology, post-submission. I was pleased to see that we were challenged with approaching it the week after.

To explain the logic, I've retained the pseudo-code I initially placed within the files, as to clarify for anyone looking over (or myself in the future) what exactly is going on; from line to line.

I learnt that the attributes I intitially set as instance variables within the initiation of the class object could just as easily be instance variables within the '#score' function itself. The initial tracking of the frame by instance/attribute, turned into a simple defined for loop that tracked the frame and would only iterate, say, when there was a strike, or when there was no strike (see scorecardIndex += 2, as to account for an entire frame).

I like this solution and I'm pleased I could regurgitate and refactor it for JavaScript. The only issue with it currently is viewing a current score. The score is only viewable after the set 10 frames are over with.

If you read all this congratulations to you. I've got to stop drinking wine and watching Frasier. I sound like a right highfalutin ponce :^)