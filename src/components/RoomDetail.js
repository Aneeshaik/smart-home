import useData from "../utils/useData"
import { useParams } from "react-router-dom"
import BgOne from "./styled-components/BgOne"
import Header from "./Header"
import Left from "./Left"
import Middle from "./Middle"
import Right from "./Right"
import { useEffect, useState } from "react"

const RoomDetail = () => {
    const { id } = useParams()
    const {houseData, loading, error} = useData();
    const [devices, setDevices] = useState(null);
    console.log(id);
    useEffect(() => {
        const fetchDevices = () => {
            if (loading) {
                console.log("Data is loading...");
                return;
            }

            if (error) {
                console.error("Error fetching data:", error);
                return;
            }
            if (!houseData || !Array.isArray(houseData) || houseData.length === 0) {
                console.log("House data is undefined or empty.");
                return;
            }
            console.log(houseData);
            console.log(houseData[0].rooms);
            const room = houseData[0].rooms.find(room => room._id === id)
            // console.log(room);
            if(room){
                console.log(room.devices);
                setDevices(room.devices)
            } else {
                console.log("Room not found");
            }
        }
        fetchDevices();
    },[houseData, loading, error, id])

    if(devices === null){
        return <div>Loading...</div>
    }
    
    return(
        <div className="flex items-center justify-center min-h-screen text-white">
            <BgOne className="">
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
            </BgOne>
        </div>
    )
}

export default RoomDetail