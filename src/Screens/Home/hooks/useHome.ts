/* eslint-disable prettier/prettier */
import {useState} from 'react';

export default function useHome() {
	const [scoreA, setScoreA] = useState<number>(0);
  const [scoreB, setScoreB] = useState<number>(0);

  function validatePoint(oldScore: number, point: number): boolean {
    if (oldScore + point < 0) {
      return false;
    }
    return true;
  }

  function changeScoreA(point: number): void {
    validatePoint(scoreA, point) && setScoreA((oldScore: number) => oldScore + point);
  }

  function changeScoreB(point: number): void {
    validatePoint(scoreB, point) && setScoreB((oldScore: number) => oldScore + point);
  }

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
  };

	return {
		scoreA,
		scoreB,
		changeScoreA,
		changeScoreB,
		resetScores,
	};
}
