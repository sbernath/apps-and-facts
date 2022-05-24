import ScoreDisplay from 'pages/ScoreDisplay';
import Home from 'pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/display" element={<ScoreDisplay />} />
      </Routes>
    </Router>
  );
}
