import { useSelector, useDispatch } from 'react-redux';

import { updateTile, updateTurn, setWinner, setGrandWinner, setTableTurn } from '../../../app/gameReducer';

import TicTacToeVerifier from '../../../utilities/TicTacToeVerifier';

import styles from './GameTile.module.scss';

function GameTile(props: any) {
    const dispatch = useDispatch();

    const turn = useSelector((state: any) => state.game.turn);
    const winners = useSelector((state: any) => state.game.winners);
    const table = useSelector((state: any) => state.game.table);
    const tableSize = useSelector((state: any) => state.game.tableSize);
    const tableTurn = useSelector((state: any) => state.game.tableTurn);
    const active = table[props.table][props.index] === null && (tableTurn === null || tableTurn === props.table);
    
    const clickHandler = () => {
        if (!active) return null;
        dispatch(updateTile({table: props.table, index: props.index, value: turn}));
        let updatedTable = [...table[props.table]];
        updatedTable[props.index] = turn;
        const wonGame = TicTacToeVerifier.verify(updatedTable, Math.pow(tableSize, 2));
        let updatedWinners = [...winners];
        if (wonGame) {
            updatedWinners[props.table] = turn;
            dispatch(setWinner({table: props.table, value: turn}));
            const wonGrandGame = TicTacToeVerifier.verify(updatedWinners, Math.pow(tableSize, 2));
            console.log(updatedWinners);
            if (wonGrandGame) dispatch(setGrandWinner(turn));
        }
        dispatch(setTableTurn(updatedWinners[props.index] !== null ? null : props.index))
        dispatch(updateTurn());
    }

    return (
        <div
            className={styles.GameTile}
            style={{cursor: active ? "pointer" : "inherit"}}
            onClick={clickHandler}
            >
            {table[props.table][props.index] === null ? "" : table[props.table][props.index] ? "0" : "X"}
        </div>
    )
}

export default GameTile;