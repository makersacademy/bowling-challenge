import React from 'react';

const Frame = (props) => {
  const { frame } = props

  if (frame.firstRoll === 10 && frame.thirdRoll === undefined) {
    frame.thirdRoll = ''
  }

  return (
    <div>
      <span>Frame {frame.frameIndex + 1}: </span>
          <span>First roll: {frame.firstRoll || 'PENDING'} </span>
          <span>Second roll: {frame.secondRoll === null ? "X" : frame.secondRoll || 'PENDING'} </span>
          {frame.thirdRoll === '' ? <span>Third roll: PENDING </span> : null}
          {frame.thirdRoll ? <span>Third roll: {frame.thirdRoll} </span> : null}
      <span>Score: {frame.score}</span>
    </div>
  );
}

export default Frame;