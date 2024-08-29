import livingRoom from "../assets/images/living-room.jpg"
import Devices from "./Devices"
import BgTwo from "./styled-components/BgTwo"

const Middle = () => {
    return (
        <div>
        <div>
        <BgTwo>
            <img className="rounded-3xl p-2" src={livingRoom} alt="living room" />
        </BgTwo>
        </div>
            <Devices />
        </div>
    )
}

export default Middle