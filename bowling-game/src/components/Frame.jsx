import React from 'react';

const Frame = (props) => {
  const { frame } = props

  return (
    <div>
      <span>Frame {frame.frameIndex + 1}: </span>
          <span>First roll: {frame.firstRoll} </span>
          <span>Second roll: {frame.secondRoll === null ? "X" : frame.secondRoll} </span>
          {frame.thirdRoll ? <span>Third roll: {frame.thirdRoll === null ? "X" : frame.thirdRoll} </span> : null}
      <span>Score: {frame.score}</span>
    </div>
  );
}

export default Frame;