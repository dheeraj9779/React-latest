import { debounce, takeEvery,all, takeLatest, delay} from "redux-saga/effects";
import {addTodo,removeTodo,editTodo} from '../store/reducers/todoSlice'

function* addTodo1(actions){
  console.log(actions)
}

export function* addSaga(){
    
    yield debounce(1000,addTodo.type, addTodo1)
}

export function* deleteSaga(){

}

export function* rootSaga(){
    yield all([addSaga(),deleteSaga()])
}

  