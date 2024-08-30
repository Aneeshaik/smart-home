import Header from "./Header";
import Right from "./Right";
import Left from "./Left";
import Middle from "./Middle";
import BgOne from "./styled-components/BgOne";

const Body = () => {
    return(
        // <div className="flex items-center justify-center min-h-screen text-white">
        //     <BgOne className="h-[600px] overflow-y-auto">
        //             <Header />
        //             <div className="flex items-stretch justify-between flex-grow">
        //                 <div className="w-1/3 box-border">
        //                     <Left />
        //                 </div>
        //                 <div className="w-1/3 box-border">
        //                     <Middle />
        //                 </div>
        //                 <div className="w-1/3 box-border">
        //                     <Right />
        //                 </div>
        //             </div>
        //     </BgOne>
        // </div>


        <div className="flex items-center justify-center min-h-screen text-white">
            <BgOne className="">
                <Header />
                <div className="flex items-stretch">
                    <div className="w-1/3 box-border bg-blue-400">
                        <Left />
                    </div>
                    <div className="w-1/3 box-border bg-red-400">
                        <Middle />
                    </div>
                    <div className="w-1/3 box-border bg-blue-400">
                        <Right />
                    </div>
                </div>
            </BgOne>
        </div>


    )
}

export default Body;