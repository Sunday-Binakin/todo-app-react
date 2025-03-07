import { useEffect, useState } from "react";
import TodoTile from "../components/TodoTile";
import { Link } from "react-router-dom";
import axios from "axios";

const Todos = () => {
    //1.declare state to store todos
    const [todos, setTodos] = useState([]);
    //2.define a function to get the todos
    const getTodos = async () => {
        //use axios to get todos
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/todos?limit=0`);
        console.table(response.data);
        //update todos state
        setTodos(response.data);
    }
    //3.call the function with useEffect
    useEffect(() => {
        getTodos();
    }, []);
    return (
        <div>
            <h1>All Todos</h1>
            <div>
                {todos.map((todo) => {
                    return <TodoTile title={todo.title} key={todo.id} icon={todo.icon}/>
                })}
            </div>
            <Link to={'/add'}>Add Todo</Link>
        </div>
    );
}
export default Todos;