import { useSelector } from 'react-redux'

import styles from './TicTacToe.module.scss';

import GameTile from '../../atoms/GameTile/GameTile';

function TicTacToe (props: any) {
  const winners = useSelector((state:any) => state.game.winners);
  const tableSize = useSelector((state:any) => state.game.tableSize);
  const tableTurn = useSelector((state: any) => state.game.tableTurn);
  const active = tableTurn === null || tableTurn === props.index;

  const tiles = Array(Math.pow(tableSize, 2)).fill(null).map((_, i) => <GameTile key={i} table={props.index} index={i} />);
  const winner = winners[props.index];

  return (
    <div className={styles.TicTacToe}>
      { 
        winner !== null ?
        <div className={styles.TicTacToe_Winner}> {winner ? "0" : "X"} </div>
        : null
      }
      <div className={styles.TicTacToe_Tiles} style={{
        gridTemplateColumns: `repeat(${tableSize}, ${100 / tableSize}%)`,
        gridTemplateRows: `repeat(${tableSize}, ${100 / tableSize}%)`,
        opacity: winner === null ? active ? 1 : 0.25 : 0.1
      }}>
        {tiles}
      </div>
    </div>
  )
}

export default TicTacToe;