import livingRoom from "../assets/images/living-room.jpg"
import Devices from "./Devices"
import BgTwo from "./styled-components/BgTwo"

const Middle = () => {
    return (
        <div className="">
        <div className="box-border overflow-auto">
        <BgTwo>
            <img className="rounded-3xl p-2" src={livingRoom} alt="living room" />
        </BgTwo>
        </div>
        <div className="">
            <Devices />
        </div>
        </div>
    )
}

export default Middle