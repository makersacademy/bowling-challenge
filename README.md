# Bowling Scorecard

## Makers Academy weekend challenge #6

## Instructions

- Clone this repo
- Open Bowling.html in your browser
- Click the numbered buttons to log your score for each bowl
- Click "Calculate score" to update your current score
- If you click a button which is more than the remaining pins, nothing will happen

## Known issues

- The tenth frame will not display the third bowl (although the end score will still be accurate)
- No obvious error messages will be displayed (although you can see these in the console log)
- The score layout doesn't look as nice as I would like (X and / for strikes and spares, and showing a running total in the space under each frame would be nice)
- I would like to remove the calculate score button and automate this process in the future


### Approach

I started out by making a Frame object, which held two values (the first and second bowls) and had one function to update both.  I added additional functions as the need became apparent, such as functions to return true if the frame was a strike or spare, and one to return the total score.

Then I began making the Game object (which is what the interface interacts with).  This has a bowl() function which delegates to the appropriate frame, so I ended up applying a lot of logic in this function so that it would always update the appropriate bowl in the appropriate frame.  Once Game was able to update each bowl appropriately and know when to stop (at the tenth frame) I began constructing the addBonuses() function, which gets called on every bowl to keep everything in check.  At the same time as building this function, I put together the addSpareBonus() and addStrikeBonus() functions to the Frame object.

Once all this was working as expected, I made the TenthFrame object.  Making a completely new object for the tenth frame seemed a better approach than tweaking the Frame object I had already, which was working exactly as I wanted.  This way Game only needs to check its frames array length and push in the appropriate object, rather than sending a load of extra information to the Frame object.

### Future (aka things I would like to improve)

- Address everything in the "Known issues" above
- Refactor - the bowl() functions in Game and Frame are doing too much and need a lot of extraction.  The lines of code that find the appropriate Frame for Game to call functions on could be shortened by having a more robust property layout for Game (the way it works at the moment feels similar to how we should remove 'magic numbers' from our code).
- Improve the CSS stylesheet - this was more painful than it felt like it should have been and there is probably a much better way to construct this layout than what I did.
