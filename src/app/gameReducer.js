import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  turn: false,
  tableTurn: null,
  grandWinner: null,
  table: Array(9).fill(Array(9).fill(null)),
  winners: Array(9).fill(null)
};

export const updateGame = createSlice({
  name: 'game',
  initialState: initialState,
  reducers: {
    setGrandWinner: (state, action) => { state.grandWinner = action.payload },
    setWinner: (state, action) => { state.winners[action.payload.single] = action.payload.value },
    updateTile: (state, action) => { state.table[action.payload.single][action.payload.index] = action.payload.value },
    updateTurn: (state) => { state.turn = !state.turn },
    setTableTurn: (state, action) => { state.tableTurn = action.payload },
    resetGame: (state) => { state = initialState }
  },
})

export const { setGrandWinner, setWinner, updateTile, updateTurn, setTableTurn } = updateGame.actions
export default updateGame.reducer;