import React from 'react';
import '../styles/Frame.css'

const Frame = (props) => {
  const { frame } = props

  if (frame.firstRoll === 10 && frame.thirdRoll === undefined && frame.frameIndex === 9) {
    frame.thirdRoll = ''
  }

  return (
    <div className="frame">
      <span className="frame-label">Frame {frame.frameIndex + 1}</span>
      <div className="frame-rolls">
        <span className="first-roll">First Roll: {frame.firstRoll || '-'}</span>
        <span className="second-roll">Second Roll: {frame.secondRoll === null ? 'X' : frame.secondRoll || '-'}</span>
        {frame.thirdRoll && (
          <span className="third-roll">Third Roll: {frame.thirdRoll}</span>
        )}
        {!frame.thirdRoll && frame.secondRoll === 10 && (
          <span className="third-roll">Third Roll: -</span>
        )}
      </div>
      <span className="frame-score">Score: {frame.score || '-'}</span>
    </div>
  );
}

export default Frame;