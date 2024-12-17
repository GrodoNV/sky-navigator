import React from 'react';
import BookingForm from './BookingForm';
import { FaPlane, FaClock, FaCalendarAlt, FaExchangeAlt } from 'react-icons/fa';

const FlightDetailsModal = ({ flight, onClose, onBooking }) => {
  const [isBookingFormOpen, setIsBookingFormOpen] = React.useState(false);

  const handleOpenBookingForm = () => {
    setIsBookingFormOpen(true);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-[hsla(240,15%,9%,1)] rounded-2xl w-full max-w-md overflow-hidden shadow-2xl">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">Detalles del Vuelo</h2>
          <div className="space-y-4 mb-6">
            <div className="flex items-center space-x-3">
              <FaPlane className="text-purple-500 text-xl" />
              <div>
                <p className="text-gray-400 text-sm">Aerolínea</p>
                <p className="text-white font-semibold">{flight.airline}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <FaCalendarAlt className="text-sky-300 text-xl" />
                <div>
                  <p className="text-gray-400 text-sm">Origen</p>
                  <p className="text-white font-semibold">{flight.from}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaCalendarAlt className="text-green-300 text-xl" />
                <div>
                  <p className="text-gray-400 text-sm">Destino</p>
                  <p className="text-white font-semibold">{flight.to}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <FaClock className="text-yellow-300 text-xl" />
              <div>
                <p className="text-gray-400 text-sm">Hora de salida</p>
                <p className="text-white font-semibold">{flight.time}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <FaExchangeAlt className="text-purple-300 text-xl" />
              <div>
                <p className="text-gray-400 text-sm">Duración</p>
                <p className="text-white font-semibold">{flight.duration}</p>
              </div>
            </div>
            {flight.layover && (
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 rounded-full bg-yellow-500 flex items-center justify-center">
                  <span className="text-black font-bold text-xs">!</span>
                </div>
                <p className="text-yellow-500 font-semibold">Este vuelo tiene escala</p>
              </div>
            )}
          </div>
          <div className="flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0 sm:space-x-2">
            <button
              onClick={onClose}
              className="w-full sm:w-auto bg-gray-700 px-4 py-2 rounded-full text-white font-semibold hover:bg-gray-600 transition-colors duration-300"
            >
              Atrás
            </button>
            <button
              onClick={handleOpenBookingForm}
              className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-purple-800 px-4 py-2 rounded-full text-white font-semibold hover:from-purple-700 hover:to-purple-900 transition-colors duration-300"
            >
              Comprar Boleto
            </button>
          </div>
        </div>
      </div>
      {isBookingFormOpen && (
        <BookingForm 
          isBookingFormOpen={isBookingFormOpen} 
          onClose={() => setIsBookingFormOpen(false)} 
          onSubmit={onBooking} 
        />
      )}
    </div>
  );
};

export default FlightDetailsModal;

