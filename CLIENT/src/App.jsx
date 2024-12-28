// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './views/LandingPange'
import MainPage from './views/MainPage';
import BookDetailPage from './components/BookDetailPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/book/:bookId" element={<BookDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
