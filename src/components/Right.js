import AirConditioner from "./AirConditioner";
import Electricity from "./Electricity";
import BgTwo from "./styled-components/BgTwo";


const Right = () => {
      
    return (
        <div className="">
        <div className="backdrop-blur-3xl p-3 bg-white/20 rounded-3xl text-white">
            <h1 className="text-left">Alerts</h1>
        </div>
        <div className="">
        <AirConditioner />
        </div>
        <BgTwo className="">
            <Electricity  />
        </BgTwo>
        </div>
    )
}


export default Right;