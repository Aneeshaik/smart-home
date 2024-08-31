import React, { useState, useEffect} from "react";
import Switch from "react-switch";
import BgTwo from "./styled-components/BgTwo";
import wifiIcon from "../assets/images/wifi-icon.svg";
import doorIcon from "../assets/images/door-icon.svg";
import cameraIcon from "../assets/images/camera-icon.svg";
import lightIcon from "../assets/images/light-icon.svg";
import fanIcon from "../assets/images/fan-grey-icon.svg";
import tvIcon from "../assets/images/tv-icon.svg";
import fridgeIcon from "../assets/images/fridge.svg"
import heaterIcon from "../assets/images/heater.svg"
import coffeeMakerIcon from "../assets/images/coffee-maker.svg"

const DeviceCard = ({ icon, name, checked, onToggle, isSpeed, speed }) => (
    <BgTwo className={`w-[30%] h-[120px] p-1 flex flex-col items-start justify-between m-1 ${checked ? 'bg-[#319bd9]' : ''}`}>
        <div className="flex justify-between space-x-7 items-center">
            <img className="p-2 bg-white rounded-full scale-75" src={icon} alt={name} />
            {!isSpeed && <span className="opacity-50">{checked ? 'On' : 'Off'}</span>}
        </div>
        <div className="py-1 flex flex-col m-1 space-y-1">
            <h1 className="text-left">{name}</h1>
            {isSpeed ? (
                <h1 className="text-[11px] opacity-75">{speed} Mbit/s</h1>
            ) : (
                <div className="flex items-center">
                    <Switch
                        checked={checked}
                        onChange={onToggle}
                        onColor="#86d3ff"
                        onHandleColor="#2693e6"
                        offColor="#ffffff"
                        offHandleColor="#dddddd"
                        handleDiameter={15}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                        height={20}
                        width={35}
                    />
                </div>
            )}
        </div>
    </BgTwo>
);

const Devices = () => {
    const [internetSpeed, setInternetSpeed] = useState(null);
    const [deviceStates, setDeviceStates] = useState({
        security: false,
        camera: false,
        light: false,
        fan: false,
        tv: false,
    });
    const devices = [
        { icon: wifiIcon, name: "Internet", isSpeed: true },
        { icon: doorIcon, name: "Security", checked: true },
        { icon: cameraIcon, name: "Camera", checked: true },
        { icon: lightIcon, name: "Light", checked: true },
        { icon: fanIcon, name: "Fan", checked: true },
        { icon: tvIcon, name: "TV", checked: true },
        { icon: fridgeIcon, name: "Fridge", checked: true},
        { icon: heaterIcon, name: "Heater", checked: true},
        { icon: coffeeMakerIcon, name: "Coffee Maker", checked: true}
    ];

    const speedCheck = () => {
        if (navigator.connection) {
            setInternetSpeed(navigator.connection.downlink);
        }
    }

    useEffect(() => {
        speedCheck();
        setInterval(speedCheck, 10 * 60 * 1000);
    }, []);

    const toggleDevice = (deviceName) => {
        setDeviceStates((prevStates) => ({
            ...prevStates,
            [deviceName]: !prevStates[deviceName],
        }));
    };

    const hasSixDevices = devices.length <= 6;

    return (
        <div className={`flex flex-wrap justify-center items-center mx-auto w-full ${
            hasSixDevices ? 'gap-y-8' : ''
        }`}>
            {devices.map((device, index) => {
                return (
                <DeviceCard
                key={index}
                icon={device.icon}
                name={device.name}
                isSpeed={device.isSpeed || false}
                speed={device.isSpeed ? internetSpeed : null}
                checked={deviceStates[device.name.toLowerCase()]}
                onToggle={() => toggleDevice(device.name.toLowerCase())}
            />
                )
            })} 
        </div>
    );
};

export default Devices;
