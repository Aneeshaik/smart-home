import Left from "./Left"
import Right from "./Right"
import { useEffect, useState } from "react"

const RoomDetail = ({id, data}) => {
    const [roomData, setRoomData] = useState([])
    const [devices, setDevices] = useState([]);
    console.log(data);
    console.log(id);

    useEffect(() => {
        const fetchDevices = async() => {
            setRoomData(data[0].rooms)
            if(!id){
                return;
            }
            if (!roomData || !Array.isArray(roomData) || roomData.length === 0) {
                console.log("House data is undefined or empty.");
                return;
            }
            const room = roomData.find(room => room._id === id)
            if(room){
                setDevices(room.devices)
            } else {
                console.log("Room not found");
            }
        }
        fetchDevices();
    },[roomData, id, data])

    if(devices === null){
        return <div>Loading...</div>
    }
    
    return(
            <div className="flex items-stretch">
                <div className="w-1/3 box-border">
                    <Left />
                </div>
                {/* <div className="w-1/3 box-border">
                    <Middle />
                </div> */}
                <div className="w-1/3 box-border">
                    <ul>
                    {devices.length > 0? (
                        devices.map((device, index) => (
                            <li key={index}>{device.name}</li>
                        ))
                    ) : (
                        <div>No devices found</div>
                    )}
                    </ul>
                </div>
                <div className="w-1/3 box-border">
                    <Right />
                </div>
            </div>
    )
}

export default RoomDetail