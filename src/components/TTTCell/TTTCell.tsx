import styles from './TTTCell.module.scss';

function TTTCell(props: any) {
    let classnames = styles.TTTCell;

    return (
        <div
            className={classnames}
            style={{
                cursor: props.a ? "pointer" : "inherit"
            }}
            >
            {Math.round(Math.random()) ? "O" : "X"}
        </div>
    )
}

export default TTTCell;