import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos : []
} 

const todoSlice = createSlice({
    name: 'todo',
    initialState : initialState,
    reducers: {
        addTodo : (state, actions) => {
            const todo = {
                id: nanoid(),
                name: actions.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, actions) => {
            state.todos = state.todos.filter(todo => todo.id !== actions.payload)
        },
        editTodo: (state, actions) => {
            const {id,name} = actions.payload;
            const index = state.todos.findIndex(todo => todo.id === id)
            if(index !== -1){
                state.todos[index] = {
                    ...state.todos[index],name
                }
            }
        }
    }
})

export const {addTodo,removeTodo,editTodo} = todoSlice.actions;
export default todoSlice.reducer;