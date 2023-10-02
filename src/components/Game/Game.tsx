import { useState } from 'react';

import styles from './Game.module.scss';

import TTT from '../TTT/TTT';

const tttCount = 9;
let defaultGameState = new Array(tttCount).fill({}).map((x, i) => {
  return {
    index: i,
    active: true,
    winner: false,
    max: tttCount,
    tiles: new Array(tttCount).fill({value: null, active: true})
  }
});

function Game() {
  const [gameStates, setGameStates] = useState(defaultGameState);
  const [winner, setWinner] = useState(false);
  const [turn, setTurn] = useState(true);

  const checkGame = () => {
    const winningPosibilities = [
        [1,2,3], [4,5,6], [7,8,9],
        [1,4,7], [2,5,8], [3,6,9],
        [1,5,9], [3,5,7],
    ]

    winningPosibilities.forEach(element => {
      let values = element.map(i => gameStates[i - 1].winner);
      if (values.includes(false)) return null;
      if (arrayElementsEqual(values)) {
        const newState = gameStates.map(value => {return {...value, active: false}});
        setGameStates(newState);
        setWinner(values[0]);
      }
    });
  }

  const arrayElementsEqual = (array: Array<any>) => new Set(array).size === 1;

  let games = gameStates.map((x, i) => <TTT table={i} game={gameStates} setgame={setGameStates} turn={turn} setturn={setTurn} checkgame={checkGame} />);

  return (
    <div className={styles.Game}>
      <div className={styles.Game_TTTs} style={{
        gridTemplateColumns: `repeat(${Math.sqrt(tttCount)}, ${100 / Math.sqrt(tttCount)}%)`,
        gridTemplateRows: `repeat(${Math.sqrt(tttCount)}, ${100 / Math.sqrt(tttCount)}%)`,
        opacity: winner === false ? 1 : 0.1
      }}>
        {games}
      </div>
      <div className={styles.Game_Winner} style={{display: winner === false ? "none" : "flex"}}>
        {winner} had won the game.
      </div>
    </div>
  )
}

export default Game;