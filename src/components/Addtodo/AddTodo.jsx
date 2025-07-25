import { useDispatch } from "react-redux"
import { addTodo } from "../../store/reducers/todoSlice"
import { useState } from "react"

export const AddTodo = () => {
    const dispatch = useDispatch();
    const [input,setValue] = useState('')
    const addTodoHandler = (e) => {
         e.preventDefault();
         dispatch(addTodo(input))
         setValue('')
    }
    return(
        <>
            <form onSubmit={addTodoHandler}>
                <input type="text" value={input} placeholder="Enter task" onChange={(e) => setValue(e.target.value)}/>
                <button type="submit">Add Todo</button>
            </form>
            
            
        </>
    )
}