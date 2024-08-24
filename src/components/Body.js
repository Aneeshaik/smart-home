import Header from "./Header";
import Right from "./Right";
import Left from "./Left";
import Middle from "./Middle";

const Body = () => {
    return(
        <div className="flex items-center justify-center min-h-screen">
            <div className="backdrop-blur-2xl bg-black/30 w-2/3 rounded-3xl">
                <Header />
                <div className="flex justify-between">
                    <div className="w-1/3">
                        <Left />
                    </div>
                    <div className="w-1/3">
                        <Middle />
                    </div>
                    <div className="w-1/3">
                        <Right />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;