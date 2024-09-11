import { useState } from "react";
import BgOne from "./styled-components/BgOne";
import Form from "./Form";
import closeicon from "../assets/images/close-icon.svg"

const Header = () => {
    const [form, setForm] = useState(false);
    const rooms = ['Living room',
        'Bed room',
        'Kitchen',
        'Bathroom',
        'Room 1',
        'Room 2']
    const handleClick = () => {
        setForm(!form);
    }
        return (
            <div className="flex justify-between items-center">
                <h1 className="text-left text-white font-semibold text-3xl m-2">Hey Anees!</h1>
                <ul className="backdrop-blur-3xl bg-white/20 flex w-max m-2 p-2 font-medium rounded-3xl space-x-6 items-center text-white">
                {rooms.map((room, index) => (
                    <li key={index}>{room}</li>
                ))}
                    {/* <li>Living room</li>
                    <li>Bed room</li>
                    <li>Kitchen</li>
                    <li>Bathroom</li>
                    <li>Room 1</li>
                    <li>Room 2</li> */}
                    <li>
                        <button className="bg-gradient-to-r from-[#000046] to-[#1CB5E0]  shadow-md shadow-slate-800 px-2 py-1 rounded-2xl hover:opacity-80 active:scale-95" onClick={handleClick}>Add room +</button>
                    </li>
                </ul>
                {form && (
                    <BgOne className="fixed z-50 top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="p-4 rounded-lg">
                    <img
                        className="absolute top-0 right-0 m-2 cursor-pointer hover:opacity-75 active:scale-90"
                        src={closeicon}
                        alt="close-icon"
                        onClick={handleClick} // Add onClick handler to close the form
                        />
                        <Form />
                    </div>
            </BgOne>
      )}
            </div>
    )
}

export default Header;