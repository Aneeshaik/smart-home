import Header from "./Header";
import Right from "./Right";
import Left from "./Left";
import Middle from "./Middle";
import BgOne from "./styled-components/BgOne";
// import FetchbackEnd from "./FetchbackEnd";

const Body = () => {
    return(
        <div className="flex items-center justify-center min-h-screen text-white">
            <BgOne className="">
                <Header />
                <div className="flex items-stretch">
                    <div className="w-1/3 box-border">
                        <Left />
                    </div>
                    <div className="w-1/3 box-border">
                        <Middle />
                    </div>
                    <div className="w-1/3 box-border">
                        <Right />
                    </div>
                </div>
            </BgOne>
            {/* <FetchbackEnd /> */}
        </div>


    )
}

export default Body;