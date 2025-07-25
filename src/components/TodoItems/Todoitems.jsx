import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { editTodo, removeTodo } from "../../store/reducers/todoSlice";

export const TodoItems = ({todo}) => {

    const todos = useSelector(state => state.todos);
        const dispatch = useDispatch();
        const [editable,setEditable] = useState(false)
        const [inpVal,setInpValue] = useState(todo.name)
        const saveEdit = (id) => {
            const body = {
                id,
                name:inpVal
            }
            dispatch(editTodo(body))
            setEditable(false)
        }
    return (
            <div className="flex">
                {!editable &&<div className="p-1">{todo.name}</div>}
                {editable &&<input type="text" className="p-1" value={inpVal} onChange={(e) => setInpValue(e.target.value)}/>}
                {!editable && <div className="bg-orange-500 text-white ml-1 cursor-pointer p-1 rounded" onClick={() => setEditable(true)}>Edit</div>}
                {editable && <div className="bg-green-500 text-white ml-1 cursor-pointer p-1 rounded" onClick={() =>  saveEdit(todo.id)}>save</div>}
                <div className="bg-black text-white ml-1 cursor-pointer p-1 rounded" onClick={() => dispatch(removeTodo(todo.id))}>Delete</div>
            </div>
       
    )
}