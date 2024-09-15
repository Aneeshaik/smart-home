import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Body from './components/Body';
import RoomDetail from './components/RoomDetail';

function App() {
  return (
      <div className="App">
      <Router>
        <Routes>
          <Route path="/rooms/:id" element={<RoomDetail />} />
          <Route path='/' element={<Body />} />
        </Routes>
      </Router>
      </div>
  );
}

export default App;
