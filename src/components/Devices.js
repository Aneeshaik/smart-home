import BgTwo from "./styled-components/BgTwo"
import wifiIcon from "../assets/images/wifi-icon.svg"
import doorIcon from "../assets/images/door-icon.svg"
import cameraIcon from "../assets/images/camera-icon.svg"
import { useState, useEffect } from "react"
import Switch from "react-switch"
import lightIcon from "../assets/images/light-icon.svg"
import fanIcon from "../assets/images/fan-grey-icon.svg"
import tvIcon from "../assets/images/tv-icon.svg"

const Devices = () => {
    const [internetSpeed, setInternetSpeed] = useState(null)
    useEffect(() => {
        if (navigator.connection) {
            setInternetSpeed(navigator.connection.downlink);
        }
    }, []);
    const [checked, setChecked] = useState(false);

    const handleChange = (nextChecked) => {
        setChecked(nextChecked);
    };
    return (
        <div className="flex flex-wrap justify-center items-center mx-auto w-full">
        <BgTwo className="w-[31%] h-[120px] p-1 flex flex-col items-start justify-between m-1">
            <img className="p-2 bg-white rounded-full scale-75" src={wifiIcon} alt="wifi" />
            <div className="p-2 text-left"> 
                <h1 className="font-medium">Internet</h1>
                <h1 className="text-[11px] opacity-75">{internetSpeed} Mbit/s</h1>
            </div>
        </BgTwo>
        <BgTwo className="w-[30%] h-[120px] p-1 flex flex-col items-start justify-between m-1">
            <div>
            <img className="p-2 bg-white rounded-full scale-75" src={doorIcon} alt="door" />
            </div>
            <div className="py-1">
            <h1>Security</h1>
            <div className="flex space-y-1 items-center ml-1">
                <Switch
                    checked={checked}
                    onChange={handleChange}
                    onColor="#86d3ff"       // Background color when the switch is on
                    onHandleColor="#2693e6"  // Handle color when the switch is on
                    offColor="#ffffff"       // Background color when the switch is off (white)
                    offHandleColor="#dddddd" // Handle color when the switch is off (light gray)
                    handleDiameter={15}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    height={20}
                    width={35}
                />
                <span className="ml-2">{checked ? 'On' : 'Off'}</span>
            </div>
        </div>
        </BgTwo>
        <BgTwo className="w-[30%] h-[120px] p-1 flex flex-col items-start justify-between m-1">
            <div className="flex justify-between space-x-7 items-center">
                <img className="p-2 bg-white rounded-full scale-75" src={cameraIcon} alt="camera" />
                <span className="opacity-50">{checked ? 'On' : 'Off'}</span>
            </div>
            <div className="py-1 flex flex-col m-1 space-y-1">
            <h1>Camera</h1>
            <div className="flex space-y-1 items-center">
            <Switch
                checked={checked}
                onChange={handleChange}
                onColor="#86d3ff"       // Background color when the switch is on
                onHandleColor="#2693e6"  // Handle color when the switch is on
                offColor="#ffffff"       // Background color when the switch is off (white)
                offHandleColor="#dddddd" // Handle color when the switch is off (light gray)
                handleDiameter={15}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={35}
            />
            </div>
            </div>
        </BgTwo>
        {/* </div>
        <div className="flex"> */}
        <BgTwo className="w-[30%] h-[120px] p-1 flex flex-col items-start justify-between space-y-4 m-1">
            <div className="flex justify-between space-x-7 items-center">
                <img className="p-2 bg-white rounded-full scale-75" src={lightIcon} alt="light" />
                <span className="opacity-50">{checked ? 'On' : 'Off'}</span>
            </div>
            <div className="py-1 flex flex-col m-1 space-y-1">
            <h1>Light</h1>
            <div className="flex space-y-1 items-center">
            <Switch
                checked={checked}
                onChange={handleChange}
                onColor="#86d3ff"       // Background color when the switch is on
                onHandleColor="#2693e6"  // Handle color when the switch is on
                offColor="#ffffff"       // Background color when the switch is off (white)
                offHandleColor="#dddddd" // Handle color when the switch is off (light gray)
                handleDiameter={15}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={35}
            />
            </div>
            </div>
        </BgTwo>
        <BgTwo className="w-[30%] h-[120px] p-1 flex flex-col items-start justify-between space-y-4 m-1">
            <div className="flex justify-between space-x-7 items-center">
                <img className="p-2 bg-white rounded-full scale-75" src={fanIcon} alt="camera" />
                <span className="opacity-50">{checked ? 'On' : 'Off'}</span>
            </div>
            <div className="py-1 flex flex-col m-1 space-y-1">
            <h1 className="text-left">Fan</h1>
            <div className="flex space-y-1 items-center">
            <Switch
                checked={checked}
                onChange={handleChange}
                onColor="#86d3ff"       // Background color when the switch is on
                onHandleColor="#2693e6"  // Handle color when the switch is on
                offColor="#ffffff"       // Background color when the switch is off (white)
                offHandleColor="#dddddd" // Handle color when the switch is off (light gray)
                handleDiameter={15}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={35}
            />
            </div>
            </div>
        </BgTwo>
        <BgTwo className="w-[30%] h-[120px] p-1 flex flex-col items-start justify-between space-y-4 m-1">
            <div className="flex justify-between space-x-7 items-center">
                <img className="p-2 bg-white rounded-full scale-75" src={tvIcon} alt="Tv" />
                <span className="opacity-50">{checked ? 'On' : 'Off'}</span>
            </div>
            <div className="py-1 flex flex-col m-1 space-y-1">
            <h1 className="text-left">TV</h1>
            <div className="flex space-y-1 items-center">
            <Switch
                checked={checked}
                onChange={handleChange}
                onColor="#86d3ff"       // Background color when the switch is on
                onHandleColor="#2693e6"  // Handle color when the switch is on
                offColor="#ffffff"       // Background color when the switch is off (white)
                offHandleColor="#dddddd" // Handle color when the switch is off (light gray)
                handleDiameter={15}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={35}
            />
            </div>
            </div>
        </BgTwo>
        {/* </div>
        <div className="flex"> */}
        <BgTwo className="w-[30%] h-[120px] p-1 flex flex-col items-start justify-between space-y-4 m-1">
            <div className="flex justify-between space-x-7 items-center">
                <img className="p-2 bg-white rounded-full scale-75" src={lightIcon} alt="light" />
                <span className="opacity-50">{checked ? 'On' : 'Off'}</span>
            </div>
            <div className="py-1 flex flex-col m-1 space-y-1">
            <h1>Light</h1>
            <div className="flex space-y-1 items-center">
            <Switch
                checked={checked}
                onChange={handleChange}
                onColor="#86d3ff"       // Background color when the switch is on
                onHandleColor="#2693e6"  // Handle color when the switch is on
                offColor="#ffffff"       // Background color when the switch is off (white)
                offHandleColor="#dddddd" // Handle color when the switch is off (light gray)
                handleDiameter={15}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={35}
            />
            </div>
            </div>
        </BgTwo>
        <BgTwo className="w-[30%] h-[120px] p-1 flex flex-col items-start justify-between space-y-4 m-1">
            <div className="flex justify-between space-x-7 items-center">
                <img className="p-2 bg-white rounded-full scale-75" src={fanIcon} alt="camera" />
                <span className="opacity-50">{checked ? 'On' : 'Off'}</span>
            </div>
            <div className="py-1 flex flex-col m-1 space-y-1">
            <h1>Fan</h1>
            <div className="flex space-y-1 items-center">
            <Switch
                checked={checked}
                onChange={handleChange}
                onColor="#86d3ff"       // Background color when the switch is on
                onHandleColor="#2693e6"  // Handle color when the switch is on
                offColor="#ffffff"       // Background color when the switch is off (white)
                offHandleColor="#dddddd" // Handle color when the switch is off (light gray)
                handleDiameter={15}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={35}
            />
            </div>
            </div>
        </BgTwo>
        <BgTwo className="w-[30%] h-[120px] p-1 flex flex-col items-start justify-between space-y-4 m-1">
            <div className="flex justify-between space-x-7 items-center">
                <img className="p-2 bg-white rounded-full scale-75" src={cameraIcon} alt="camera" />
                <span className="opacity-50">{checked ? 'On' : 'Off'}</span>
            </div>
            <div className="py-1 flex flex-col m-1 space-y-1">
            <h1>Camera</h1>
            <div className="flex space-y-1 items-center">
            <Switch
                checked={checked}
                onChange={handleChange}
                onColor="#86d3ff"       // Background color when the switch is on
                onHandleColor="#2693e6"  // Handle color when the switch is on
                offColor="#ffffff"       // Background color when the switch is off (white)
                offHandleColor="#dddddd" // Handle color when the switch is off (light gray)
                handleDiameter={15}
                uncheckedIcon={false}
                checkedIcon={false}
                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                height={20}
                width={35}
            />
            </div>
            </div>
        </BgTwo>
        </div>
    )
}

export default Devices