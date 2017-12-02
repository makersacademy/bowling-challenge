
Bowling Challenge
=================

Approach: in this challenge attempt I have focussed on encapsulation and manipulating javascript to produce object orientated behaviour. As such, the the bowling game is divided into three major object types - the roll, the frame and the scorecard (that tracks the game as a whole). Each frame holds the state of two rolls, and the scorecard has one 'frame in play' at any one time, while storing old frame scores in an array.

Depending on the result of methods called on the rolls completed within a frame, a third object, the module setter, sets a bonus mode for the next frame (strike, spare, or none). The bonus mode dictates what portions (if any) of the next frame should be scored as bonus points for the previous frame. Hopefully this will keep the code dry, as the same bonus and points scoring methods can be reused, in different configurations, in each bonus mode.

Technologies:
All business logic is javascript. The interface is built with html and CSS. Animated elements of the interface (displaying points, strike messages &c) are written with jquery, using a local jquery library.

All javascript code is tested with jasmine, and the business logic was written test-driven.

Note: Although the interface is fully functioning, I have focussed most time and attention on developing and refactoring the business logic to be clean and flexible. 
