import Todo from "./Todo";

const Active = ({todos,addTodo,toggleTodo}) => {

    return ( 
        <>
            <form action="#" onSubmit={(e)=>{
                e.preventDefault()
                const form = document.querySelector('form')
                addTodo(form.name.value)
                form.reset()
            }}>
                <input type="text" name="name"/>
                <button>Add</button>
            </form>

            {todos.map((todo,index)=>{
                if(!todo.done) {
                    return <Todo todo={todo} index={index} toggleTodo={toggleTodo} key={index}></Todo>
                }
                return null
            })}
        </>
     );
}
 
export default Active;