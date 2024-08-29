import Header from "./Header";
import Right from "./Right";
import Left from "./Left";
import Middle from "./Middle";
import BgOne from "./styled-components/BgOne";

const Body = () => {
    return(
        <div className="flex items-center justify-center min-h-screen text-white">
            <BgOne className="h-[90vh] flex flex-col box-border">
                <Header />
                <div className="flex justify-between box-border flex-1">
                    <div className="w-1/3 h-full overflow-hidden box-border">
                        <Left />
                    </div>
                    <div className="w-1/3 h-full overflow-hidden box-border">
                        <Middle />
                    </div>
                    <div className="w-1/3 h-full overflow-hidden box-border">
                        <Right />
                    </div>
                </div>
            </BgOne>
        </div>
    )
}

export default Body;