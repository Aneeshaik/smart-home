import powerIcon from "../assets/images/power-icon.svg"
import {CircularProgressbar} from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css'

const Right = () => {
    return (
        <div>
        <div className="backdrop-blur-3xl m-2 p-3 bg-white/20 rounded-3xl text-white">
            <h1 className="text-left">Alerts</h1>
        </div>
        <div className="backdrop-blur-3xl m-2 bg-white/20 rounded-3xl">
            <h1 className="">Electric Usage</h1>
        </div>
        <div className="backdrop-blur-3xl m-2 bg-white/20 rounded-3xl">
            <div className="flex justify-between m-2 p-3">
                <div className="items-center flex space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full shadow-green-500 shadow-2xl animate-pulse"></div>
                    <h1 className="text-white">Air Conditioner</h1>
                </div>
                <img src={powerIcon} alt="power-icon" />
            </div>
        <div className="relative w-64 h-64 mx-auto overflow-hidden">
            <CircularProgressbar
                percent={32}
                size={256} // Adjust size
                strokeWidth={2} // Adjust stroke width
                strokeColor="#4caf50" // Color of the progress
                trailColor="#d6d6d6" // Color of the trail
                className="absolute top-0 items-center rounded-2xl"
                style={{ transform: 'rotate(-90deg)' }}
            />
            <div className="absolute top-4 inset-0 flex items-center justify-center text-white">
                {23}%
            </div>
        </div>
        </div>
        </div>
    )
}


export default Right;