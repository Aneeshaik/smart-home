import Header from "./Header";
import Right from "./Right";
import Left from "./Left";
import Middle from "./Middle";
import BackGround from "./BackGround";

const Body = () => {
    return(
        <div className="flex items-center justify-center min-h-screen">
            <BackGround>
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
            </BackGround>
        </div>
    )
}

export default Body;