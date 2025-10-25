import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Members from './pages/Members';
import Guidelines from './pages/Guidelines';
import LeaderBoard from './pages/LeaderBoard';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/members" element={<Members />} />
      <Route path="/guidelines" element={<Guidelines />} />
      <Route path="/leaderboard" element={<LeaderBoard />} />
    </Routes>
  </Router>
);

export default App;