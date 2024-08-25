import News from "./News";

const Right = () => {
    return (
        <div>
        <div className="backdrop-blur-3xl m-2 p-3 bg-white/20 rounded-3xl text-white">
            <h1 className="text-left">Alerts</h1>
        </div>
        <div className="backdrop-blur-3xl m-2 bg-white/20 rounded-3xl">
                <h1 className="">Electric Usage</h1>
        </div>
        <News />
        </div>
    )
}


export default Right;