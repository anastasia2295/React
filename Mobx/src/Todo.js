import { observer } from "mobx-react-lite";
import todo from "./store/todo";

const Todo = observer(()=>{
    return(
        <div>
            <button onClick={() => todo.fetchTodo()}> fetch todo</button>
            {todo.todos.map(t =>
                <div key={t.id}>
                    <input type="checkbox" checked={t.completed} onChange={() => todo.completeTodo(t.id)}/>
                    {t.title}
                    <button onClick={() => todo.removeTodo(t.id)}>х</button>
                </div>
            )}
        </div>
    )
})

export default Todo