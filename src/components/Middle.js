import livingRoom from "../assets/images/living-room.jpg"
import Devices from "./Devices"
import BgTwo from "./styled-components/BgTwo"

const Middle = () => {
    return (
        <div className="flex flex-col justify-between h-full">
                <BgTwo>
                    <img className="rounded-3xl p-2" src={livingRoom} alt="living room" />
                </BgTwo>
            <div className="">
                <Devices />
            </div>
        </div>
    )
}

export default Middle