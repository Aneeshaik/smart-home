import { useCallback, useEffect, useState } from "react";
const useData = () => {
    const [userHouseData, setUserHouseData] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const getData = useCallback( async() => {
        // console.log("get data called");
        const token = localStorage.getItem('token')
        try{
            const response = await fetch('http://localhost:5000/house', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setUserHouseData(jsonData);
            console.log(userHouseData);
            
        } catch(error){
            console.error(error);
            setError(error)
        } finally {
            setLoading(false)
        }
    },[])
    useEffect(() => {
        // console.log("get effect");
        getData();
    },[getData])
    // console.log(data);
    return {userHouseData, loading, error, refetchData: getData};
}

export default useData;