
Bowling Challenge
=================

## Features:

- Gutter game (Edge case)
- One frame
- Multiple frames
- Spares
- Strikes
- Final Frame (Edge case)
- Strike bonus (Edge Case)
- Spare bonus (Edge Case)

Domain Model:
-----

Game:   |
        | - constrcutor 
                score array []
                increment 
        | - roll 
               push to array 
               if pins === "/" do not push 


Score:  |
        |- score 
                frameindex = 0 
                score = 0
                if frame === 10 
                    score += finalFrame
                if final frame is spare 
                    score this.rolls(index) + this.rolls(index+1) + this.rolls(index+2)

                if strike 
                    10 + strike bonus
                    increment ++ 
                if spare 
                    10 + spare bonus
                    increment + 2
                else 
                    normal scoring 
                    increment + 2

        |- strike refactor 
                index === 10
        |- spare refactor 
                index + index+1 === 10
        |- spare bonus refactor 
                index + 2
        |- strike bonus refactor
                index+1 + index+2
        |- normal scoring refactor 
        |- final frame refactor 
                

HTML    | 
        |- 1 - 10 buttons 
         - Hard coded frame 1 - 10 
        |- roll 1 input 
         - roll 2 input 
         - 10th frame roll 3 input 
         - running score 
         - total score 


Interface | 
            page - click pins: 1 - 10 
            score card - shows pins knocked + score under + total
            NOTE: 10th if 10 > has extra input 

    




