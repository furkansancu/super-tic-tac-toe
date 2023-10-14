import { useSelector, useDispatch } from 'react-redux';
import { updateTile, updateTurn } from '../../app/gameReducer';

import styles from './SingleTile.module.scss';

function SingleTile(props: any) {
    const dispatch = useDispatch();

    const turn = useSelector((state: any) => state.game.turn);
    const table = useSelector((state: any) => state.game.table);
    const tableTurn = useSelector((state: any) => state.game.tableTurn);
    const winners = useSelector((state: any) => state.game.winners);

    const value = table[props.single][props.index];
    const active = value === null && (tableTurn === null || tableTurn === props.single || winners[tableTurn] !== null) && winners[props.single] === null;

    const clickHandler = () => {
        if (!active) return null;
        let newTable = [...table[props.single]];
        newTable[props.index] = turn;
        props.tileUpdated(newTable, turn, props.index);
        dispatch(updateTile({single: props.single, index: props.index, value: turn}));
        dispatch(updateTurn());
    }

    return (
        <div
            className={styles.SingleTile}
            style={{cursor: active ? "pointer" : "inherit"}}
            onClick={clickHandler}
            >
                {value === null ? "" : value ? "O" : "X"}
        </div>
    )
}

export default SingleTile;