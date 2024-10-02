import { useNavigate } from "react-router-dom";

const AddTodo = () => {
    const navigate = useNavigate();
    const saveTodo = (event)=>{
        

        event.preventDefault();
        //post data to a todo api
        //go to homepage
        navigate('/');
    }

    return (
        <div>
            <h1>Add A new Todo</h1>
            <form onSubmit={saveTodo}>
                <input type="text" placeholder="enter task"  required/>
                <button type="submit">Submit</button>
            </form>
        </div>

    );
}
export default AddTodo;