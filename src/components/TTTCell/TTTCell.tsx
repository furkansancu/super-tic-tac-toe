import styles from './TTTCell.module.scss';

function TTTCell(props: any) {
    let classnames = styles.TTTCell;

    if (props.i % Math.sqrt(props.m) === 0) classnames += " " + styles.noborderleft;
    if (props.i % Math.sqrt(props.m) === Math.sqrt(props.m) - 1) classnames += " " + styles.noborderright;
    if (props.i < Math.sqrt(props.m)) classnames += " " + styles.nobordertop;
    if (props.i >= props.m - Math.sqrt(props.m)) classnames += " " + styles.noborderbottom;

    return (
        <div className={classnames}>
            {Math.round(Math.random()) ? "O" : "X"}
        </div>
    )
}

export default TTTCell;