import Devices from "./Devices"
import BgTwo from "./styled-components/BgTwo"
import livingRoom from "../assets/images/living-room.jpg"

const Middle = ({imageURL, devices, houseId, roomId}) => {
    return (
        <div className="flex flex-col justify-between h-full">
                <BgTwo className="">
                    <img className="rounded-3xl p-2" src={imageURL? `http://localhost:5000/images/${imageURL}` : livingRoom} alt={imageURL} />
                </BgTwo>
            <div className="flex-grow flex items-center justify-center">
                <Devices devices={devices} houseId={houseId} roomId={roomId}/>
            </div>
        </div>
    )
}

export default Middle