import { useState } from "react";
import BgOne from "./styled-components/BgOne"

const Form = () => {
    const devices = ['Light', 'Fan', 'TV', 'Fridge', 'Heater', 'Coffee Maker']
    const [isChecked, setIsChecked] = useState({
        light: false,
        fan: false,
        tV: false,
        fridge: false,
        heater: false,
        coffeeMaker: false
    });
    const handleClick = (name) => {
        setIsChecked((prevStates) => {
            return {
                ...prevStates,
                [name]: !prevStates[name]
            }
        });
    }
    return (
        <div className="">
            <div className="">
                <div className="m-2 flex flex-col">
                    <label className="mb-1" htmlFor="room-name">Name of the Room:</label>
                    <input className="rounded-lg w-80 border-2 p-2 bg-transparent focus:outline-none" type="text" name="room-name" placeholder=""/>
                </div>
                <div className="flex space-x-6 p-2">
                {devices.map((device, index) => {
                    return (
                        <div key={index} className="flex items-center space-x-1">
                            <input type="checkbox" className={`appearance-none w-3 h-3 
                                border ${isChecked[device.toLocaleLowerCase().replace(/\s+/g, "")]? 'bg-blue-800' : 'bg-white'} rounded-full border-grey-400 
                                cursor-pointer`} name="checkbox" onClick={() =>handleClick(device.toLowerCase().replace(/\s+/g, ""))}/>
                            <label htmlFor="checkbox">{device}</label>
                    </div>
                    )
                })}
                </div>
            </div>
        </div>    
    )
}

export default Form;