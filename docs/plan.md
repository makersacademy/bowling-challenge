# Proposed alternative workflow

Conditions, checks and functionality were being added to the code base in a way which, although functioning well, is neither streamlined nor particularly reflective of how the game progresses. This does not help readability for someone who is new to the code.

I therefore propose to 'reboot' the development process with a more coherent forward view that more closely follows the steps taken in a real game of bowling. It should be possible to do this by repurposing elements of the existing code and using the existing tests, with minimal changes to the actual logic.

N.B. references to ending a frame/game below should be read as immediate termination, bypassing any actions which follow in the nested list.

* at the start of a frame, rack up 10 pins
* before rolling, update the display
* after rolling in a normal frame
  - note how many pins were knocked down
    - update all scores that depend on this roll
    - update the number of pins available to knock down
  - if no pins remain, end the frame
  - if 2 balls have been rolled for the frame, end the frame
* after rolling in the tenth frame
  - note how many pins were knocked down
    - update all scores that depend on this roll
    - update the number of pins available to knock down
  - if 3 balls have been rolled, end the frame
  - if no pins remain, rack up 10 pins
    - else (if pins remain) if 2 balls have been rolled, end the frame
* at the end of a frame
  - clear any remaining pins
  - if 10 frames have been completed, update the display and end the game
  - start a new frame

Following this structure should also make it fairly trivial to add more players to the card - the last action at the end of a frame will become 'start a new frame in the next player's game if it is still live'.

### Proposed structure of scorecard display

This change is to bring the display in line with standard formats, in particular showing 3 balls for the 10th frame.

| Frame 1 | Frame 2 | ... | Frame 9 | Frame 10 |
|  :---:  |  :---:  |:---:|  :---:  |   :---:  |
|    ¦    |    ¦    | ... |    ¦    | ¦ &nbsp; &nbsp; &nbsp; ¦ |
| (score) | (score) | ... | (score) |  (score) |

Strikes should be displayed as an `X` and the second ball of a spare should be shown as `/`.
