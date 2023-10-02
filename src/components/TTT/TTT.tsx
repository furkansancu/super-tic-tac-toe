import styles from './TTT.module.scss';
import TTTCell from '../TTTCell/TTTCell';

function TTT (props: any) {
  let classnames = styles.TTT;
  const tileCount = 9;

  const winGame = (winner: string) => {
    let newState = props.game;
    newState[props.table].active = false;
    newState[props.table].winner = winner;
    props.setgame(newState);
    props.checkgame();
  }

  let tiles = new Array(tileCount).fill({}).map((x, i) =>
    <TTTCell table={props.table} index={i} game={props.game} setgame={props.setgame} turn={props.turn} setturn={props.setturn} wingame={winGame} />
  );

  if (props.table % Math.sqrt(props.game[props.table].max) === 0) classnames += " " + styles.noborderleft;
  if (props.table % Math.sqrt(props.game[props.table].max) === Math.sqrt(props.game[props.table].max) - 1) classnames += " " + styles.noborderright;
  if (props.table < Math.sqrt(props.game[props.table].max)) classnames += " " + styles.nobordertop;
  if (props.table >= props.game[props.table].max - Math.sqrt(props.game[props.table].max)) classnames += " " + styles.noborderbottom;

  return (
    <div className={classnames}>
      <div className={styles.TTT_Winner} style={{display: props.game[props.table].winner === false ? "none" : "flex"}}>
        {props.game[props.table].winner}
      </div>
      <div className={styles.TTT_Tiles} style={{
      gridTemplateColumns: `repeat(${Math.sqrt(tileCount)}, ${100 / Math.sqrt(tileCount)}%)`,
      gridTemplateRows: `repeat(${Math.sqrt(tileCount)}, ${100 / Math.sqrt(tileCount)}%)`,
      opacity: props.game[props.table].winner === false ? 1 : 0.25
      }}>
        {tiles}
      </div>
    </div>
  )
}

export default TTT;