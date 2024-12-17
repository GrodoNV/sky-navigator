import React, { useState } from 'react';
import Navbar from './Navbar';
import AnimatedPlane from './AnimatedPlane';
import SearchForm from './SearchForm';
import FlightList from './FlightList';
import Footer from './Footer';
import flightData from '../utils/flights.json';

const HomePage = () => {
  const [showSearchForm, setShowSearchForm] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isFormExpanded, setIsFormExpanded] = useState(false);
  const [isFlightListVisible, setIsFlightListVisible] = useState(false);

  const handlePlaneClick = () => {
    setShowSearchForm(true);
  };

  const handleCloseSearchForm = () => {
    setShowSearchForm(false);
  };

  const handleSearch = (formData) => {
    const { type, origin, destination } = formData;
    const flights = flightData[type];
    
    const filteredFlights = flights.filter((flight) => 
      flight.from.toLowerCase() === origin.toLowerCase() &&
      flight.to.toLowerCase() === destination.toLowerCase()
    );

    setSearchResults(filteredFlights);
    setIsFormExpanded(true); // Expandimos la barra después de una búsqueda
    setIsFlightListVisible(true); // Mostrar FlightList después de la búsqueda
  };

  const toggleFlightList = () => {
    setIsFlightListVisible(!isFlightListVisible); // Cambiar visibilidad al hacer clic
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-cover bg-center" style={{backgroundImage: 'url("https://w.wallhaven.cc/full/ym/wallhaven-ymlv8x.jpg")'}}>
        <div className="container mt-10 mb-10 mx-auto py-16 text-center flex flex-col items-center">
          <AnimatedPlane onClick={handlePlaneClick} />
          <div className="w-full ">
            {showSearchForm && <SearchForm onClose={handleCloseSearchForm} onSearch={handleSearch} />}
            {isFormExpanded && (
              <div className="py-20">
                <div className="flex justify-center mb-10">
                <button 
  onClick={toggleFlightList} 
  className="bg-transparent border border-purple-950 text-white hover:bg-purple-900 hover:text-yellow-400 px-15 py-3 rounded-full shadow-lg transition-all duration-300"
>
  {isFlightListVisible ? 'Ocultar Vuelos' : 'Mostrar Vuelos'}
</button>

                </div>
                {isFlightListVisible && (
                  <div className="w-full">
                    <FlightList flights={searchResults} />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
