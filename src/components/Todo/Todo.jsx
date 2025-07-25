import { useSelector } from "react-redux"
import { AddTodo } from "../Addtodo/AddTodo";
import { TodoItems } from "../TodoItems/Todoitems";


export const Todo = () => {
    const todos = useSelector(state => state.todos);
    return(
        <>
            <AddTodo/>
            {todos.map((todo) => (
                <TodoItems todo={todo} key={todo.id}/>
            ))}
        </>
    )
}