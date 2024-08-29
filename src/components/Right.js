import AirConditioner from "./AirConditioner";
import Electricity from "./Electricity";
import BgTwo from "./styled-components/BgTwo";


const Right = () => {
      
    return (
        <div className="flex flex-col h-full box-border">
        <div className="backdrop-blur-3xl p-3 box-border bg-white/20 rounded-3xl text-white overflow-auto">
            <h1 className="text-left">Alerts</h1>
        </div>
        <div className="box-border overflow-auto">
        <AirConditioner />
        </div>
        <BgTwo className="box-border overflow-auto">
            <Electricity  />
        </BgTwo>
        </div>
    )
}


export default Right;