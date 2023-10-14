import { useSelector, useDispatch } from 'react-redux';

import { setTableTurn, setWinner } from '../../app/gameReducer';

import styles from './Single.module.scss';

import SingleTile from '../SingleTile/SingleTile';

import TicTacToeVerifier from '../../utilities/TicTacToeVerifier';

function Single(props: any) {
  const dispatch = useDispatch();

  const grandWinner = useSelector((state: any) => state.game.grandWinner);
  const tableTurn = useSelector((state: any) => state.game.tableTurn);
  const winners = useSelector((state: any) => state.game.winners);

  const active = (tableTurn === null || tableTurn === props.single || winners[tableTurn] !== null) && grandWinner === null;

  const tileUpdated = (table: Array<any>, turn: boolean, index: number) => {
    const wonSingle = TicTacToeVerifier.verify(table);
    let newWinners = [...winners];
    if (wonSingle) {
      dispatch(setWinner({single: props.single, value: turn}));
      newWinners[props.single] = turn;
      props.gameUpdated(newWinners, turn);
    }
    dispatch(setTableTurn(index));
  };

  const tiles = Array(9).fill(null).map((_, i) => <SingleTile key={i} single={props.single} index={i} tileUpdated={tileUpdated} />);

  return (
    <div className={styles.Single}
      style={{opacity: active ? 1: 0.55}}
    >
      {
        winners[props.single] !== null ?
        <div className={styles.Single_Winner}>
          {winners[props.single] ? "O" : "X"}
        </div>
        : null
      }
      <div className={styles.Single_Tiles}
        style={{opacity: winners[props.single] === null ? 1 : 0.2}}
      >
        {tiles}
      </div>
    </div>
  )
}

export default Single;