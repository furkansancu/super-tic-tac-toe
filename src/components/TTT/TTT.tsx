import styles from './TTT.module.scss';
import TTTCell from '../TTTCell/TTTCell';

function TTT (props: any) {
  let classnames = styles.TTT;
  const tileCount = 9;
  let tiles = new Array(tileCount).fill({}).map((s, index) => <TTTCell i={index} m={s.max} a={props.a} />);

  if (props.index % Math.sqrt(props.m) === 0) classnames += " " + styles.noborderleft;
  if (props.index % Math.sqrt(props.m) === Math.sqrt(props.m) - 1) classnames += " " + styles.noborderright;
  if (props.index < Math.sqrt(props.m)) classnames += " " + styles.nobordertop;
  if (props.index >= props.m - Math.sqrt(props.m)) classnames += " " + styles.noborderbottom;

  return (
    <div className={classnames} style={{
      gridTemplateColumns: `repeat(${Math.sqrt(tileCount)}, ${100 / Math.sqrt(tileCount)}%)`,
      gridTemplateRows: `repeat(${Math.sqrt(tileCount)}, ${100 / Math.sqrt(tileCount)}%)`
      }}>
      {tiles}
    </div>
  )
}

export default TTT;