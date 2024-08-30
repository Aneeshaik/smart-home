import AirConditioner from "./AirConditioner";
import Electricity from "./Electricity";
import BgTwo from "./styled-components/BgTwo";


const Right = () => {
      
    return (
        <div className="flex flex-col justify-between h-full">
        <BgTwo className="p-3">
            <h1 className="text-left">Alerts</h1>
        </BgTwo> 
        <BgTwo>
            <AirConditioner />
        </BgTwo>
        <BgTwo>
            <Electricity  />
        </BgTwo>
        </div>
    )
}


export default Right;