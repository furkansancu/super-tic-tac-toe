import styles from './TTTCell.module.scss';

function TTTCell(props: any) {
    let classnames = styles.TTTCell;

    const clickHandler = () => {
        if (!props.game[props.table].active) return null;
        if (!props.game[props.table].tiles[props.index].active) return null;

        let newState = props.game;
        newState[props.table].tiles[props.index] = {value: props.turn ? "X" : "0", active: false};
        props.setgame(newState);
        props.setturn(!props.turn);
        checkGame();
    }

    const checkGame = () => {
        const winningPosibilities = [
            [1,2,3], [4,5,6], [7,8,9],
            [1,4,7], [2,5,8], [3,6,9],
            [1,5,9], [3,5,7],
        ]
        winningPosibilities.forEach(element => {
            let values = element.map(i => props.game[props.table].tiles[i - 1]);
            values = values.map(i => i.value);
            if (values.includes(null)) return null;
            if (arrayElementsEqual(values)) {
                props.wingame(values[0]);
            }
        });
    }

    const arrayElementsEqual = (array: Array<any>) => new Set(array).size === 1;

    return (
        <div
            className={classnames}
            style={{
                cursor: props.game[props.table].active ? "pointer" : "inherit"
            }}
            onClick={clickHandler}
            >
            {props.game[props.table].tiles[props.index].value}
        </div>
    )
}

export default TTTCell;