import useData from "../utils/useData"
import { useParams } from "react-router-dom"
import BgOne from "./styled-components/BgOne"
import Header from "./Header"
import Left from "./Left"
import Middle from "./Middle"
import Right from "./Right"
import { useEffect, useMemo, useState } from "react"
import Form from "./Form"

const RoomDetail = () => {
    const { id } = useParams()
    // const [roomData, setRoomData] = useState([])
    const {roomData, loading, error} = useData();
    const [devices, setDevices] = useState([]);
    console.log("Room Data:",roomData);
    

    useEffect(() => {
        const fetchDevices = async() => {
            // console.log("Effect Called");
            if(roomData){
                console.log(roomData);
            }
            
            if(!id){
                return;
            }
            // await refetchData(); 
            if (!roomData || !Array.isArray(roomData) || roomData.length === 0) {
                console.log("House data is undefined or empty.");
                return;
            }
            // console.log(roomData);
            // console.log(houseData);
            // console.log(houseData[0].rooms);
            const room = roomData.find(room => room._id === id)
            console.log(room);
            if(room){
                // console.log(room.devices);
                setDevices(room.devices)
            } else {
                console.log("Room not found");
            }
        }
        fetchDevices();
    },[roomData, id])

    // useEffect(() => {
    //     console.log('House data:', houseData);
    // }, [houseData]);
    

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    if(devices === null){
        return <div>Loading...</div>
    }
    
    return(
        <div>
            <Header />
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
        </div>
    )
}

export default RoomDetail