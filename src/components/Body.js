import Header from "./Header";
import Right from "./Right";
import Left from "./Left";
import Middle from "./Middle";
import BgOne from "./styled-components/BgOne";

const Body = () => {
    return(
        <div className="flex items-center justify-center min-h-screen text-white">
            <BgOne className="">
                <Header />
                <div className="flex justify-between">
                    <div className="w-1/3 h-fullr">
                        <Left />
                    </div>
                    <div className="w-1/3 h-full">
                        <Middle />
                    </div>
                    <div className="w-1/3 h-full">
                        <Right />
                    </div>
                </div>
            </BgOne>
        </div>
    )
}

export default Body;