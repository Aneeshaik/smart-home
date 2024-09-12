import { useEffect, useState } from "react";
// import BgOne from "./styled-components/BgOne"

const Form = ({roomName, addButton}) => {
    const [localRoomName, setLocalRoomName] = useState();
    const [newRooms, setNewRooms] = useState([])
    const [user, setUser] = useState();
    const devices = ['Light', 'Fan', 'TV', 'Fridge', 'Heater', 'Coffee Maker']
    const [addedDevices, setAddedDevices] = useState([]);
    const [isChecked, setIsChecked] = useState({
        light: false,
        fan: false,
        tV: false,
        fridge: false,
        heater: false,
        coffeeMaker: false
    });
    const handleCheckbox = (name) => {
        setIsChecked((prevStates) => {
            return {
                ...prevStates,
                [name]: !prevStates[name]
            }
        });
        setAddedDevices((prevDevices) => {
            if (prevDevices.includes(name)){
                return prevDevices.filter(device => device !== name)
            } else {
                return [...prevDevices, name]
            }
        });
    }
    const handleChange = (e) => {
        const newRoom = e.target.value
        setLocalRoomName(newRoom)
        roomName(newRoom)
    }
    const handleClick = async () => {
        if(localRoomName){
            addButton()
            setNewRooms(prevRooms => [...prevRooms, localRoomName])
            const response = await fetch('http://localhost:5000/house', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userName: user,
                    rooms: newRooms.map((room) => ({
                        roomName: room,
                        devices: addedDevices.map((device, deviceIndex) => ({
                                id: deviceIndex,
                                icon: device,
                                name: device,
                                status: false
                        }))
                    })),
                    // rooms: [
                    //     {
                    //         roomName: localRoomName,
                    //         devices: addedDevices.map((device, index) => ({
                    //             id: index,
                    //             icon: device,
                    //             name: device,
                    //             status: false
                    //         }))
                    //     }
                    // ]
                })
            })
            const data = await response.json()
            console.log("Successfully added in database", data)
        } else {
            alert('Please enter a room name')
        }
    }

    useEffect(() => {
        const getUserName = async () => {
            const response = await fetch(`http://localhost:5000/users/${localStorage.getItem('userId')}`);
            const data = await response.json();
            console.log(data);
            setUser(data.firstName);
        }
        getUserName();
    })

    return (
        <div className="backdrop-blur-3xl p-3 rounded-3xl bg-black/50">
            <div className="flex flex-col items-center">
                <div className="m-2 flex justify-center flex-col items-start">
                    <label className="mb-1 text-lg" htmlFor="room-name">Name of the Room:</label>
                    <input className="rounded-lg w-80 border-2 p-2 bg-transparent focus:outline-none" onChange={handleChange} value={localRoomName} type="text" name="room-name" placeholder="Enter name of the room"/>
                </div>
                <div className="grid grid-cols-3 gap-3 p-2">
                {devices.map((device, index) => {
                    return (
                        <div key={index} className="flex items-center space-x-1">
                            <input type="checkbox" className={`appearance-none w-3 h-3 
                                border-2 ${isChecked[device.toLocaleLowerCase().replace(/\s+/g, "")]? 'bg-blue-800' : 'bg-white'} rounded-full border-grey-400 
                                cursor-pointer`} name="checkbox" onClick={() =>handleCheckbox(device.toLowerCase().replace(/\s+/g, ""))}/>
                            <label htmlFor="checkbox" className="text-base">{device}</label>
                    </div>
                    )
                })}
                </div>
                <div>
                    <button className="bg-gradient-to-r from-[#000046] to-[#1CB5E0] px-3 py-1 rounded-3xl hover:opacity-85 active:scale-95" onClick={handleClick}>Add</button>
                </div>
            </div>
        </div>    
    )
}

export default Form;