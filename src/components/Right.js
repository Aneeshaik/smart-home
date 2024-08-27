import AirConditioner from "./AirConditioner";
import BgTwo from "./styled-components/BgTwo";


const Right = () => {
      
    return (
        <div>
        <div className="backdrop-blur-3xl m-2 p-3 bg-white/20 rounded-3xl text-white">
            <h1 className="text-left">Alerts</h1>
        </div>
        <div></div>
        <AirConditioner />
        <BgTwo>
            <h1 className="">Electric Usage</h1>
        </BgTwo>
        </div>
    )
}


export default Right;