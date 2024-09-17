// import Header from "./Header";
// import Right from "./Right";
// import Left from "./Left";
// import Middle from "./Middle";
import BgOne from "./styled-components/BgOne";
import SignUp from "./SignUp";
import RoomDetail from "./RoomDetail";
import { useEffect, useState } from "react";
import useData from "../utils/useData";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./Header";
import OneRoom from "./OneRoom";


const Home = () => {
    const { houseData, loading, error } = useData();
    const [shouldRenderForm, setShouldRenderForm] = useState(false)
    const navigate = useNavigate();
    useEffect(() => {
      let isMounted = true;
      if (loading){
        console.log("Data is Loading...")
        return;
      }
      if (error){
        console.log("Error fetching data", error);
        return;
      }
      console.log("Home Rendered");
      
      if(isMounted){
        if(!houseData || houseData.length === 0 || houseData[0].rooms.length === 0){
            setShouldRenderForm(true)
            console.log("If rendered");
            
        } 
        else {
            const roomData = houseData[0].rooms;
            if(roomData.length > 0){
                navigate(`/rooms/${roomData[0]._id}`)
            }
        }
      }
      return () => {
        isMounted = false;
      }
    }, [navigate, houseData, loading, error])

    if(shouldRenderForm){
        return (
            <div>
                <Header />
            </div>
        )
    }

    return <div>Loading....</div>
  }

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
                <Router>
                    <Routes>
                        <Route path="/rooms/:id" element={<Header />} />
                        <Route path='/' element={<Home />} />
                    </Routes>
                </Router>
                </div> ) : (
                    <SignUp onSuccessfullRegistration = {checkValidation} />
                )
            }
            </BgOne>
        </div>
    )
}

export default Body;