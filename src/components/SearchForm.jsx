import React, { useState, useEffect } from 'react';
import flightData from '../utils/flights.json';

const SearchForm = ({ onClose, onSearch, isVisible }) => {
  const [formData, setFormData] = useState({
    type: 'international',
    tripType: 'oneWay',
    origin: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    passengers: 1,
  });

  const [suggestions, setSuggestions] = useState({ origin: [], destination: [] });

  useEffect(() => {
    const allCities = [...new Set([
      ...flightData.international.map(f => f.from),
      ...flightData.international.map(f => f.to),
      ...flightData.national.map(f => f.from),
      ...flightData.national.map(f => f.to)
    ])];

    setSuggestions({
      origin: allCities,
      destination: allCities
    });
  }, []);

  const handleInputChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleToggleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(formData);
    handleFormClose();
  };

  const handleFormClose = () => {
    onClose();
  };

  return (
    <div className={`fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center ${isVisible ? 'block' : 'hidden'}`}>
      <div className="form-container p-4 sm:p-6 rounded-lg w-full max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl bg-gray-800 overflow-y-auto max-h-[90vh]">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">Buscar Vuelo</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-group">
            <label className="block mb-2 text-sm text-gray-400">Tipo de vuelo</label>
            <div className="checkbox-wrapper-10">
              <input
                type="checkbox"
                id="flightType"
                className="tgl tgl-flip"
                checked={formData.type === 'international'}
                onChange={() => handleToggleChange('type', formData.type === 'international' ? 'national' : 'international')}
              />
              <label htmlFor="flightType" className="tgl-btn" data-tg-on="Internacional" data-tg-off="Nacional"></label>
            </div>
          </div>
          <div className="form-group">
            <label className="block mb-2 text-sm text-gray-400">Tipo de viaje</label>
            <div className="checkbox-wrapper-10">
              <input
                type="checkbox"
                id="tripType"
                className="tgl tgl-flip"
                checked={formData.tripType === 'roundTrip'}
                onChange={() => handleToggleChange('tripType', formData.tripType === 'roundTrip' ? 'oneWay' : 'roundTrip')}
              />
              <label htmlFor="tripType" className="tgl-btn" data-tg-on="Ida y vuelta" data-tg-off="Solo ida"></label>
            </div>
          </div>
          <div className="form-group">
            <label className="block mb-2 text-sm text-gray-400">Origen</label>
            <input
              type="text"
              name="origin"
              placeholder="Origen"
              value={formData.origin}
              onChange={(e) => handleInputChange('origin', e.target.value)}
              list="originSuggestions"
              className="form-input w-full"
            />
            <datalist id="originSuggestions">
              {suggestions.origin.map((city, index) => (
                <option key={index} value={city} />
              ))}
            </datalist>
          </div>
          <div className="form-group">
            <label className="block mb-2 text-sm text-gray-400">Destino</label>
            <input
              type="text"
              name="destination"
              placeholder="Destino"
              value={formData.destination}
              onChange={(e) => handleInputChange('destination', e.target.value)}
              list="destinationSuggestions"
              className="form-input w-full"
            />
            <datalist id="destinationSuggestions">
              {suggestions.destination.map((city, index) => (
                <option key={index} value={city} />
              ))}
            </datalist>
          </div>
          <div className="form-group">
            <label className="block mb-2 text-sm text-gray-400">Fecha de salida</label>
            <input
              type="date"
              name="departureDate"
              value={formData.departureDate}
              onChange={(e) => handleInputChange('departureDate', e.target.value)}
              className="form-input w-full"
            />
          </div>
          {formData.tripType === 'roundTrip' && (
            <div className="form-group">
              <label className="block mb-2 text-sm text-gray-400">Fecha de retorno</label>
              <input
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={(e) => handleInputChange('returnDate', e.target.value)}
                className="form-input w-full"
              />
            </div>
          )}
          <div className="form-group">
            <label className="block mb-2 text-sm text-gray-400">Número de pasajeros</label>
            <input
              type="number"
              name="passengers"
              value={formData.passengers}
              onChange={(e) => handleInputChange('passengers', e.target.value)}
              min="1"
              className="form-input w-full"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between mt-6 gap-4">
            <button type="button" onClick={onClose} className="bg-gray-600 px-4 py-2 rounded hover:bg-gray-500 transition-colors w-full sm:w-auto">
              Cancelar
            </button>
            <button type="submit" className="bg-purple-900 text-white px-4 py-2 rounded hover:bg-purple-800 transition-colors w-full sm:w-auto">
              Buscar vuelo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;

