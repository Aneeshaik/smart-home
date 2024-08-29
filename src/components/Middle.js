import livingRoom from "../assets/images/living-room.jpg"
import Devices from "./Devices"
import BgTwo from "./styled-components/BgTwo"

const Middle = () => {
    return (
        <div className="flex flex-col h-full box-border">
        <div className="box-border overflow-auto">
        <BgTwo>
            <img className="rounded-3xl p-2" src={livingRoom} alt="living room" />
        </BgTwo>
        </div>
        <div className="box-border overflow-auto">
            <Devices />
        </div>
        </div>
    )
}

export default Middle