
Bowling Challenge
=================

Haven't really got very far with this I'm afraid. There's two types of objects,
frames and games. Frames have `first` and `second` as properties, together with
a `setShots()`, `isSpare()`, `isStrike()` methods.

Games have a list of frames that you can progressively append to. There is also
a list of frame scores which returns `null` for scores that can't yet be
calculated.

The idea is that these null scores get filled in as soon as they
can be, and an overall `game.score` gets calculated once we have 10 frame
scores. This might involve a frame list of 11 or 12 frames if we get a spare
or strike at the end.
