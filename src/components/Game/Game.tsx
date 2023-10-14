import { useSelector, useDispatch } from 'react-redux';

import styles from './Game.module.scss';

import Single from '../Single/Single';

import TicTacToeVerifier from '../../utilities/TicTacToeVerifier';
import { setGrandWinner } from '../../app/gameReducer';

function Game() {
  const dispatch = useDispatch();

  const grandWinner = useSelector((state: any) => state.game.grandWinner);

  const gameUpdated = (winners: Array<any>, turn: boolean) => {
    const wonGame = TicTacToeVerifier.verify(winners);
    if (wonGame) dispatch(setGrandWinner(turn));
  }

  const singles = Array(9).fill(null).map((_, i) => <Single key={i} single={i} gameUpdated={gameUpdated} />);

  return (
    <div className={styles.Game}>
      {grandWinner !== null ? <div className={styles.Winner}> {grandWinner ? "O" : "X"} </div> : null}
      <div className={styles.Singles} style={{opacity: grandWinner === null ? 1 : 0.45}}>
        {singles}
      </div>
    </div>
  )
}

export default Game;