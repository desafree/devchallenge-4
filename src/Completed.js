import Todo from "./Todo";

const Completed = ({todos,removeTodo,toggleTodo, deleteAll}) => {

    return ( 
        <>

            {todos.map((todo,index)=>{
                if(todo.done) {
                    return <Todo todo={todo} index={index} toggleTodo={toggleTodo} key={index} removeTodo={removeTodo}></Todo>
                }
                return null
            })}

            <button onClick={deleteAll}>delete all</button>
        </>
     );
}
 
export default Completed;