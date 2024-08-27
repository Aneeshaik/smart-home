import powerIcon from "../assets/images/power-icon.svg"
import {CircularProgressbar} from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css'
import plusIcon from "../assets/images/plus-icon.svg"
import minusIcon from "../assets/images/minus-icon.svg"
import fanIcon from "../assets/images/fan-icon.svg"
import timerIcon from "../assets/images/timer-icon.svg"
import normalIcon from "../assets/images/normal-icon.svg"
import BgTwo from "./styled-components/BgTwo"
// import heatIcon from "../assets/images/heat-icon.svg"
// import coolIcon from "../assets/images/cool-icon.svg"

const AirConditioner = () => {
    const value = 18;
    const calcColor = (value, min, max) => {
        const ratio = (value - min) / (max - min);
        return `hsl(${ratio * 120}, 100%, 50%)`; // Generates a color based on the value.
      };

    return (
        <BgTwo className="p-2">
            <div className="flex justify-between m-2">
                <div className="items-center flex space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full shadow-green-500 shadow-2xl animate-pulse"></div>
                    <h1 className="text-white">Air Conditioner</h1>
                </div>
                <img src={powerIcon} alt="power-icon" />
            </div>
            <div className="m-3">
            <div className="relative w-56 h-56 mx-auto">
                <CircularProgressbar
                    value={value}
                    minValue={16}
                    text={`${value}\u00B0`}
                    maxValue={34}
                    circleRatio={0.7}
                    styles={{
                    trail: {
                        strokeLinecap: 'round',
                        transform: 'rotate(-126deg)',
                        transformOrigin: 'center center',
                    },
                    path: {
                        strokeLinecap: 'round',
                        transform: 'rotate(-126deg)',
                        transformOrigin: 'center center',
                        stroke: calcColor(value, 0, 120),
                    },
                    text: {
                        fill: '#ddd',
                    },
                    }}
                    strokeWidth={5}
                    />
            </div>
            <div className="flex justify-between mx-16 mt-[-40px]">
                <img className="p-2 rounded-full bg-slate-300" src={minusIcon} alt="minus" />
                <img className="p-2 rounded-full bg-slate-300" src={plusIcon} alt="plus" />
            </div>
            </div>
            <div className="flex justify-between mx-8">
                <div className="flex flex-col items-center text-white">
                    <img className="mb-1" src={fanIcon} alt="fan" />
                    <h1>Fan Speed</h1>
                </div>
                <div className="flex flex-col items-center text-white">
                    <img className="mb-1" src={timerIcon} alt="timer" />
                    <h1>Timer</h1>
                </div>
                <div className="flex flex-col items-center text-white">
                    <img className="mb-1" src={normalIcon} alt="normal" />
                    <h1>Mode</h1>
                </div>
            </div>
        </BgTwo>
    )
}

export default AirConditioner