// var frame_rolls = [[], [], [], [], [], [], [], [], [], [], []];
// var frame_scores = [];
//
//
// Game = has 10 frames
//
// Frame = has 2 rolls
//
// Roll 1 = 10 pins
// Roll 2 = remaining pins OR 0 pins
//
//
//
// Spare:
//
// if FrameN-1(roll1 + roll2) = 10
//  then push 10 in index2 of FrameN
//   and for FrameN do ((roll1 * 2) + roll2)
//     and push result in index2 of FrameN
//
// Strike:
//
// if FrameN-1(roll1) = 10
//   then push 0 in index 1 of FrameN-1
//   and push 10 in index 2 of FrameN-1
//     and for FrameN do ((roll1 *2) + (roll2 * 2))
//     and push result index2 of FrameN
