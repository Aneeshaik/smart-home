import livingRoom from "../assets/images/living-room.jpg"
import BgTwo from "./styled-components/BgTwo"
import wifiIcon from "../assets/images/wifi-icon.svg"
import doorIcon from "../assets/images/door-icon.svg"
import cameraIcon from "../assets/images/camera-icon.svg"
import { useState, useEffect } from "react"

const Middle = () => {
    const [internetSpeed, setInternetSpeed] = useState(null)
    useEffect(() => {
        if (navigator.connection) {
            setInternetSpeed(navigator.connection.downlink);
        }
    }, []);
    return (
        <div>
        <BgTwo>
            <img className="rounded-3xl p-2" src={livingRoom} alt="living room" />
        </BgTwo>
        <div className="flex">
        <BgTwo className="w-1/3 p-1 flex flex-col items-start space-y-4 justify-between m-1">
            <img className="p-2 bg-white rounded-full scale-75" src={wifiIcon} alt="wifi" />
            <div className="p-2 text-left"> 
                <h1 className="font-medium">Internet</h1>
                <h1 className="text-[11px] opacity-75">{internetSpeed} Mbit/s</h1>
            </div>
        </BgTwo>
        <BgTwo className="w-1/3 h-1/3 p-1 flex flex-col items-start justify-between space-y-4 m-1">
            <img className="p-2 bg-white rounded-full scale-75" src={doorIcon} alt="door" />
            <h1 className="p-2">Security</h1>
        </BgTwo>
        <BgTwo className="w-1/3 h-1/3 p-1 flex flex-col items-start justify-between space-y-4 m-1">
            <img className="p-2 bg-white rounded-full scale-75" src={cameraIcon} alt="camera" />
            <h1 className="p-2">Camera</h1>
        </BgTwo>
        </div>
        </div>
    )
}

export default Middle