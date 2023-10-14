import gameReducer from "./gameReducer";

import { configureStore } from '@reduxjs/toolkit'

export default configureStore({ reducer: { game: gameReducer } })