import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import FAQsPage from './components/FAQsPage';
import AboutUsPage from './components/AboutUsPage';
import { SearchProvider } from './components/SearchProvider'; // Importa el SearchProvider

const App = () => {
  return (
    <SearchProvider> {/* Asegúrate de envolver tu App en el SearchProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
        </Routes>
      </Router>
    </SearchProvider>
  );
};

export default App;
