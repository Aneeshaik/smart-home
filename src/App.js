import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Body from './components/Body';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
