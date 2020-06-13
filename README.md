# Bowling game 

I must admit, at first glance this is a daunting challenge to take on single handedly. Sure on the surface it doesn't seem like much but in reality it is. 

Over the first weekend I am going to be working out how the back end is going to work. at a basic level I have worked out that I will need the following for my code to work.

- A way to keep track of what frame it is
- A way to increment the frame
- A way to keep track of how many balls have been bowled in order to increment frames
- A way to check if the first bowl was a strike (10 pins) so that we increment frames
- A way to store each bowl/score for the current frame. 
- A way to add up each frame to give the overall score and score per frame. 

This does not seem too bad, the hard part comes in the way bowling is scored. 

if the first bowl is a strike, then the next two bowls scored are added as a bonus to that frame. if a spare is rolled (2 bowls knock over all pins) then the next bowl is added as a bonus to that frame. So as an example below

```
bowlOne = strike
frameOne = [10]
frameTwo starts
```
```
bowlOne = strike
frameOne = [10, 10]
frameTwo = [10]
frameThree starts
```
```
bowlOne = 8
frameOne = [10, 10, 8] => frameOne score = 28
frameTwo = [10, 8]
frameThree = [8]
bowlTwo = 1
frameTwo = [10, 8, 1] => frameTwo score = 19 => total score 47
frameThree = [8, 1] => frameThree score = 9 => total score 56
frameFour starts
```
With this in mind, we can see that we may not be able to give the first round a score until the third frames first bowl. So because of this I now know:

- The code may need to keep track of 3 frames at a time
- Each bowl, the code will need to check any previous frames and work out if this bowl needs to be added or not
- Once a frame is over the code will need to total the frames scores and store them/pass them to our HTML page.
- *it may be worth thinking about deleting old/completed frames*

Looking at the above requirements I now know the following important points:

- I will only need to track a max of **three frames** at a time
- Each frame can have a max of **three scores** and a min of **two scores** before it needs to be totaled
- If the **first score** in a frame is 10 then we will need to add the **following two scores** to that frame
- if by the **second score** the total of a frame is 10 then the **following score** needs to be added to that frame. 