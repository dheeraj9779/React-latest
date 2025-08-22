import { configureStore } from "@reduxjs/toolkit";
import todoSlice from './reducers/todoSlice';
import createSagaMiddleware from 'redux-saga'
import { addSaga, deleteSaga, rootSaga } from "../saga/todoSaga";


const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: todoSlice,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)
//sagaMiddleware.run(deleteSaga)

export default store;