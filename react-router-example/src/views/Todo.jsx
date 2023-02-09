import { useParams } from "react-router-dom";

function Todo() {
    const params = useParams();

    return (
        <h2>Todo item { params.id }</h2>
    )
}

export default Todo;