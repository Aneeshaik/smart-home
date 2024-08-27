import livingRoom from "../assets/images/living-room.jpg"
import BgTwo from "./styled-components/BgTwo"

const Middle = () => {
    return (
        <div>
        <BgTwo>
            <img className="rounded-3xl p-2" src={livingRoom} alt="living room" />
        </BgTwo>
        <BgTwo className="w-1/3 p-3">
            <h1>Internet</h1>
        </BgTwo>
        </div>
    )
}

export default Middle