import { useParams } from "react-router-dom"
import Header from "./Header"

const OneRoom = () => {
    const { id } = useParams();
    return (
        <div>
            <Header id={id} />
        </div>
    )
}

export default OneRoom