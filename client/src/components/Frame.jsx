import React from 'react';
import '../styles/Frame.css'

const Frame = (props) => {
  const { frame } = props
  let isSpare = false
  let isStrike = false

  // Check for spare and strike conditions
  if (frame.firstRoll === 10 && frame.thirdRoll === undefined && frame.frameIndex === 9) {
    frame.thirdRoll = '';
  } else if (frame.firstRoll + frame.secondRoll === 10 && frame.firstRoll !== 10 && frame.thirdRoll === undefined && frame.frameIndex === 9) {
    isSpare = true;
    frame.thirdRoll = '';
  } else if (frame.firstRoll + frame.secondRoll === 10 && frame.firstRoll !== 10 ) {
    isSpare = true;
  } else if (frame.firstRoll === 10) {
    isStrike = true
  }

  return (
    <div className="frame">
      {/* Render frame index */}
      <span className="frame-label">Frame {frame.frameIndex + 1}</span>
      <div className="frame-rolls">

        {/* Render first roll */}
        {isStrike && frame.firstRoll !== 0 ? <span className="first-roll">First Roll: X</span> : null}
        {!isStrike && frame.firstRoll !== 0 ? <span className="first-roll">First Roll: {frame.firstRoll || '-'}</span> : null}
        {frame.firstRoll === 0 ? <span className="first-roll">First Roll: 0</span> : null}

        {/* Render second roll */}
        {!isSpare && frame.secondRoll !== 0 && frame.secondRoll !== 10? <span className="second-roll">Second Roll: {frame.secondRoll === undefined? '-' : frame.secondRoll || '-'}</span> : null}
        {isSpare? <span className="second-roll">Second Roll: /</span> : null}
        {frame.secondRoll === 10? <span className="second-roll">Second Roll: X</span> : null}
        {frame.secondRoll === 0 ? <span className="second-roll">Second Roll: 0</span> : null}

        {/* Render third roll */}
        {frame.thirdRoll && frame.thirdRoll !== 10? (<span className="third-roll">Third Roll: {frame.thirdRoll}</span>) : null}
        {frame.thirdRoll === '' ? (<span className="third-roll">Third Roll: -</span>) : null}
        {frame.thirdRoll === 10? <span className="third-roll">Third Roll: X</span> : null}
        {frame.thirdRoll === 0 ? (<span className="third-roll">Third Roll: 0</span>) : null}
      </div>

      {/* Render frame score */}
      {frame.score === 0 ?  <span className="frame-score">Score: 0</span> : <span className="frame-score">Score: {frame.score || '-'}</span>}
    </div>
  );
}

export default Frame;