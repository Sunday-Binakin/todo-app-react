import TodoTile from "../components/TodoTile";
import { Link } from "react-router-dom";

const Todos = () =>{
    return (
        <div>
            <h1>All Todos</h1>
            <div>
                <TodoTile title={'creating a react app'}/>
                <TodoTile title={'install tailwind css'}/>
                <TodoTile title={'talk to Nkunim'}/>
                <TodoTile title={'Drink more water'}/>
            </div>
<Link to={'/add'}>Add Todo</Link>
        </div>
    );
}
export default Todos;