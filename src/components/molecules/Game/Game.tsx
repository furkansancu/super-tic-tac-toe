import { useSelector } from 'react-redux'

import styles from './Game.module.scss';

import TicTacToe from '../TicTacToe/TicTacToe';

function Game() {
  const winner = useSelector((state: any) => state.game.winner);
  const size = useSelector((state: any) => state.game.size);
  const TicTacToes = Array(Math.pow(size, 2)).fill(null).map((_, i) => <TicTacToe key={i} index={i} />);

  return (
    <div className={styles.Game}>
      <div className={styles.Game_TicTacToes} style={{
        gridTemplateColumns: `repeat(${size}, ${100 / size}%)`,
        gridTemplateRows: `repeat(${size}, ${100 / size}%)`,
        opacity: winner === null ? 1 : 0.1
      }}>
        {TicTacToes}
      </div>
      <div className={styles.Game_Winner} style={{display: winner === null ? "none" : "flex"}}>
        {winner ? "O" : "X"} had won the game.
      </div>
    </div>
  )
}

export default Game;