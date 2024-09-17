import { useEffect, useState } from "react";
import BgOne from "./styled-components/BgOne";
import Form from "./Form";
import { Link, useNavigate, useParams } from "react-router-dom";
import closeicon from "../assets/images/close-icon.svg"
import useData from "../utils/useData";
import RoomDetail from "./RoomDetail";

const Header = () => {
    const { id } = useParams()
    const [form, setForm] = useState(false);
    const navigate = useNavigate();
    const [roomList, setRoomList] = useState(null);
    const {houseData, loading, error, refetchData} = useData()

    const handleClick = () => {
        setForm(!form);
    }

    const handleAddButton = async (roomId) => {
        await refetchData();
        navigate(`/rooms/${roomId}`)
        setForm(!form);
    };

    useEffect(() => {
        if(houseData){
            setRoomList(houseData[0]?.rooms || [])
        }
    },[houseData, id])

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    
        return (
            <div>
            <div className="flex justify-between items-center">
                
                <h1 className="text-left text-white font-semibold text-3xl m-2">Hey Anees!</h1>
                <ul className="backdrop-blur-3xl bg-white/20 flex w-max m-2 p-2 font-medium rounded-3xl space-x-6 items-center text-white">
                {roomList.map((room, index) => (
                    <Link to={`/rooms/${room._id}`} className={`${room._id === id? 'opacity-100 border-b-2 shadow-md scale-105' : 'opacity-50'} rounded-3xl py-1 px-2`} key={index}>{room.roomName}</Link>
                ))}
                    <li>
                        <button className="bg-gradient-to-r from-[#000046] to-[#1CB5E0]  shadow-md shadow-slate-800 px-2 py-1 rounded-2xl hover:opacity-80 active:scale-95" onClick={handleClick}>Add room +</button>
                    </li>
                </ul>
                {form && (
                    <BgOne className="fixed z-20 top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="p-4 rounded-lg">
                    <img
                        className="absolute top-0 right-0 m-2 cursor-pointer hover:opacity-75 active:scale-90"
                        src={closeicon}
                        alt="close-icon"
                        onClick={handleClick} // Add onClick handler to close the form
                        />
                        {/* <Form roomName = {handleRoomName} addButton = {handleAddButton}/> */}
                        <Form addButton = {handleAddButton}/>
                    </div>
            </BgOne>
        )}
        </div>
       { roomList.length > 0 && <RoomDetail id={id} data={houseData}/> }
        </div>
    )
}

export default Header;