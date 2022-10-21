game
|
\_> 9 x 'standard frames'
      1 final frame
       
standard frame
2x rolls
all 10 in 1 roll = strike (2x score next 2 rolls)
all 10 in 2 rolls = spare (2x score next roll)
> 10 in 2 rolls = open (move to next

Frame n:

Roll 1 -> if score == 10 then 'Strike [x]'
      \-> if score < 10 then move to Roll 2

Roll 2 (max score 10 - Roll 1):
       -> if final score == 10 then 'Spare [/]' & fininsh frame
      \-> if score < 10 then finish frame

Frame n+1
If Frame n == 'strike' or 'spare'
Add roll 1 score to frame n
If Frame n == 'strike'
Add roll 2 score to frame n too

Frame n+2
If frame n && frame n+1 == 'strike'
Add roll 1 score to frame n

Example game:
         Roll 1    Roll 2    Frame Score   Running Total
Frame 1    6          1           7             7
Frame 2    5          3           8             15
Frame 3    9          /           15            30
Frame 4    5          4           9             39
Frame 5    X          -           19            58
Frame 6    6          3           9             67
Frame 7    X          -           24            91
Frame 8    X          -           16            107
Frame 9    4          2           6             113
Frame 10   X          -           25            138
Bonus 1    X          -                         
Bonus 2    5          -                         