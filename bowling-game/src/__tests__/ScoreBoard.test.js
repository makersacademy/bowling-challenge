import React from 'react';
import { render } from '@testing-library/react';
import ScoreBoard from '../components/ScoreBoard';

describe('ScoreBoard', () => {
  test('renders the correct number of frames', () => {
    const rolls = [1, 2, 3, 4, 5, 5, 7, 3, 10, 1, 0, 5, 2, 5, 5, 8, 1, 2, 3];
    const { getAllByTestId } = render(<ScoreBoard rolls={rolls}/>);
    const frames = getAllByTestId('frame');
    expect(frames).toHaveLength(10);
  })
})