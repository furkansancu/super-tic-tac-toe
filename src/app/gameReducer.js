import { createSlice } from '@reduxjs/toolkit'

export const updateGame = createSlice({
  name: 'game',
  initialState: {
    turn: false,
    winner: null,
    size: 3,
    tableSize: 3,
    tableTurn: null,
    table: Array(9).fill(Array(9).fill(null)),
    winners: Array(9).fill(null)
  },
  reducers: {
    setGrandWinner: (state, action) => { state.winner = action.payload },
    setWinner: (state, action) => { state.winners[action.payload.table] = action.payload.value },
    setSize: (state, action) => { state.size = action.payload },
    updateTile: (state, action) => { state.table[action.payload.table][action.payload.index] = action.payload.value },
    updateTurn: (state) => { state.turn = !state.turn },
    setTableTurn: (state, action) => { state.tableTurn = action.payload }
  },
})

export const { setGrandWinner, setWinner, setSize, updateTile, updateTurn, setTableTurn } = updateGame.actions
export default updateGame.reducer;