import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Body from './components/Body';
import RoomDetail from './components/RoomDetail';
import useData from './utils/useData';
import { useEffect } from 'react';
import Form from './components/Form';

const Home = () => {
  const { houseData, loading, error } = useData();
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
    if(isMounted){
      const roomData = houseData[0].rooms;
      if(roomData.length > 0){
        navigate(`/rooms/${roomData[0]._id}`)
      } else {
        <Form />
      }
    }
    return () => {
      isMounted = false;
    }
  }, [navigate, houseData, loading, error])
  return <div>Loading....</div>
}

function App() {
  return (
      <div className="App">
        <Body />
      </div>
  );
}

export default App;
