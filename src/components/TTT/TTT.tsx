import styles from './TTT.module.scss';
import TTTCell from '../TTTCell/TTTCell';

function TTT (props: any) {
  let classnames = styles.TTT;
  const tileCount = 9;
  let tiles = new Array(tileCount).fill({}).map((s, index) => <TTTCell i={index} m={s.max} />);

  if (props.index % Math.sqrt(props.m) === 0) classnames += " " + styles.noborderleft;
  if (props.index % Math.sqrt(props.m) === Math.sqrt(props.m) - 1) classnames += " " + styles.noborderright;
  if (props.index < Math.sqrt(props.m)) classnames += " " + styles.nobordertop;
  if (props.index >= props.m - Math.sqrt(props.m)) classnames += " " + styles.noborderbottom;

  return (
    <div className={classnames} style={{
      gridTemplateColumns: new Array(Math.sqrt(tileCount) + 1).join("auto "),
      gridTemplateRows: new Array(Math.sqrt(tileCount) + 1).join("auto ")
      }}>
      {tiles}
    </div>
  )
}

export default TTT;