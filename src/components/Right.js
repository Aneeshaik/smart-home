import AirConditioner from "./AirConditioner";
import BgTwo from "./styled-components/BgTwo";


const Right = () => {
      
    return (
        <div className="h-[100vh]">
        <div className="backdrop-blur-3xl m-2 p-3 bg-white/20 rounded-3xl text-white">
            <h1 className="text-left">Alerts</h1>
        </div>
        <div></div>
        <AirConditioner />
        <BgTwo className="h-[28vh] mt-2">
            <h1 className="">Electric Usage</h1>
        </BgTwo>
        </div>
    )
}


export default Right;