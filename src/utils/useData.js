import { useCallback, useEffect, useState } from "react";
const useData = () => {
    const [houseData, setHouseData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const getData = useCallback( async() => {
        try{
            const response = await fetch('http://localhost:5000/house');
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setHouseData(jsonData);
        } catch(error){
            console.error(error);
            setError(error)
        } finally {
            setLoading(false)
        }
    },[])
    useEffect(() => {
        getData();
    },[getData])
    // console.log(data);
    return {houseData, loading, error, refetchData: getData};
}

export default useData;