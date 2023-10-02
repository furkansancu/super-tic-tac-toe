import { useState } from 'react';

import styles from './Game.module.scss';

import TTT from '../TTT/TTT';

const tttCount = 9;
const defaultGameState = new Array(tttCount).fill({active: true, winner: false, max: tttCount});

function Game() {
  const [gameStates, setGameStates] = useState(defaultGameState);
  let games = gameStates.map((s, index) => <TTT index={index} a={s.active} w={s.winner} m={s.max} />);

  return (
    <div className={styles.Game} style={{
      gridTemplateColumns: `repeat(${Math.sqrt(tttCount)}, ${100 / Math.sqrt(tttCount)}%)`,
      gridTemplateRows: `repeat(${Math.sqrt(tttCount)}, ${100 / Math.sqrt(tttCount)}%)`
      }}>
      {games}
    </div>
  )
}

export default Game;