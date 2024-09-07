import Header from "./Header";
import Right from "./Right";
import Left from "./Left";
import Middle from "./Middle";
import BgOne from "./styled-components/BgOne";
import Registration from "./Registration";
import { useEffect, useState } from "react";

const Body = () => {
    const [isRegistered, setIsRegistered] = useState(false);
    useEffect(() => {
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
          setIsRegistered(true);
        }
      }, []);
    
      const handleRegistrationSuccess = () => {
        setIsRegistered(true);
      };
 
    return(
        <div className="flex items-center justify-center min-h-screen text-white">
            <BgOne className="">
            {isRegistered ? (
                <div>
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
                </div> ) : (
                    <Registration onSuccessfullRegistration = {handleRegistrationSuccess} />
                )
            }
            </BgOne>
        </div>
    )
}

export default Body;