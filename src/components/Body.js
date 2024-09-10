import Header from "./Header";
import Right from "./Right";
import Left from "./Left";
import Middle from "./Middle";
import BgOne from "./styled-components/BgOne";
import SignUp from "./SignUp";
import { useEffect, useState } from "react";

const Body = () => {
    const [isRegistered, setIsRegistered] = useState(false);
    const [isLoading, setIsLoading] = useState(true)
    const checkValidation = async() => {
        const storedToken = localStorage.getItem("token");
        // console.log(storedToken);
        
        if (storedToken) {
            try{
                const response = await fetch('http://localhost:5000/auth/check', {
                    headers:{
                        'Authorization': `Bearer ${storedToken}`
                    }
                })
                // console.log(response);
                if(response.ok) setIsRegistered(true);
                else{
                    localStorage.removeItem('token');
                    setIsRegistered(false);
                }
            } catch(error) {
                localStorage.removeItem('token');
                setIsRegistered(false)
            }
        } else {
            setIsRegistered(false);
        }
        setIsLoading(false);
    }
    useEffect(() => {
        checkValidation();
      }, []);
    
      if(isLoading){
        return <div>Loading....</div>
      }
 
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
                    <SignUp onSuccessfullRegistration = {checkValidation} />
                )
            }
            </BgOne>
        </div>
    )
}

export default Body;