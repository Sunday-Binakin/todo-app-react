import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddTodo = () => {
    const navigate = useNavigate();

    const saveTodo = async (event) => {


        event.preventDefault();
        //collect form input
        const formData = new FormData(event.target);
        //post data to a todo api
        await axios.post(`${import.meta.env.VITE_BASE_URL}/todos`, formData
            //  {
            // title: formData.get("todo")

            // }
        );
        //go to homepage
        navigate('/');
    }

    return (
        <div>
            <h1>Add A new Todo</h1>
            <form onSubmit={saveTodo}>
                <input type="text" placeholder="enter task" required name="title" />
                <input type="file" name="icon" required />
                <button type="submit">Submit</button>
            </form>
        </div>

    );
}
export default AddTodo;