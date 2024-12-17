import React, { useState } from 'react';
import FlightDetailsModal from './FlightDetailsModal';
import BookingForm from './BookingForm';

const FlightCard = ({ flight }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCardClick = () => {
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  const handleBooking = () => {
    setShowDetails(false);
    setShowBookingForm(true);
  };

  return (
    <>
      <div 
        className="card relative flex flex-col justify-between gap-2 p-3 left-10 sm:p-4 w-full max-w-[20rem] sm:max-w-[20rem] h-auto cursor-pointer 
        bg-[hsla(240,15%,9%,1)] 
        rounded-xl sm:rounded-2xl 
        transition-all duration-300 ease-in-out 
        transform hover:scale-105 
        hover:shadow-2xl"
        onClick={handleCardClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          className={`card__border absolute -z-10 top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2 w-[calc(100%+2px)] h-[calc(100%+2px)] 
          rounded-xl sm:rounded-2xl 
          transition-all duration-500 
          ${isHovered ? 'opacity-100 scale-105' : 'opacity-70'}`}
        />

        <div>
          <div className="card_title__container mb-2">
            <h3 className="card_title text-sm sm:text-base text-white font-bold">{flight.airline}</h3>
            <div className="flex items-center space-x-1 mt-1">
              <span className="card_paragraph text-xs sm:text-sm text-[#9ca3af] font-medium">
                {flight.from}
              </span>
              <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#4ade80]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              <span className="card_paragraph text-xs sm:text-sm text-[#9ca3af] font-medium">
                {flight.to}
              </span>
            </div>
          </div>

          <div className="card__list flex flex-col space-y-1 sm:space-y-2">
            <div className="card__list_item flex items-center gap-1 sm:gap-2">
              <div className="check flex justify-center items-center w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full">
                <svg className="check_svg w-2 h-2 sm:w-3 sm:h-3 fill-white" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <span className="list_text text-[10px] sm:text-xs text-white flex items-center gap-1">
                <svg className="icon w-3 h-3 sm:w-4 sm:h-4 fill-current text-sky-300" viewBox="0 0 24 24">
                  <path d="M12 2.5C6.75 2.5 2.5 6.75 2.5 12S6.75 21.5 12 21.5 21.5 17.25 21.5 12 17.25 2.5 12 2.5zm0 17a7 7 0 1 1 0-14 7 7 0 0 1 0 14zM12.75 6.5h-1.5v6l5.25 3.15.75-1.23-4.5-2.67V6.5z"/>
                </svg>
                Departure: {flight.time}
              </span>
            </div>
            <div className="card__list_item flex items-center gap-1 sm:gap-2">
              <div className="check flex justify-center items-center w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full">
                <svg className="check_svg w-2 h-2 sm:w-3 sm:h-3 fill-white" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
              </div>
              <span className="list_text text-[10px] sm:text-xs text-white flex items-center gap-1">
                <svg className="icon w-3 h-3 sm:w-4 sm:h-4 fill-current text-green-300" viewBox="0 0 24 24">
                  <path d="M21.15 12.4l-1.8-.72c-.18-.07-.36-.12-.54-.17-.9-.27-1.83-.18-2.64.25L3.75 3.52 3 5.33 11.5 9.25v3.95L8 15.14v2.41l3.42-.88L14 17.25h.01c.68.21 1.4.33 2.14.33h.85c.95 0 1.88-.34 2.6-.96.72-.62 1.21-1.45 1.41-2.37.27-1.23-.11-2.51-1.06-3.37z"/>
                </svg>
                Duration: {flight.duration}
              </span>
            </div>
            {flight.layover && (
              <div className="card__list_item flex items-center gap-1 sm:gap-2">
                <div className="check flex justify-center items-center w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full">
                  <svg className="check_svg w-2 h-2 sm:w-3 sm:h-3 fill-white" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </div>
                <span className="list_text text-[10px] sm:text-xs text-white flex items-center gap-1">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 fill-current text-yellow-300" viewBox="0 0 24 24">
                    <path d="M12 6.5c-3.03 0-5.5 2.47-5.5 5.5s2.47 5.5 5.5 5.5 5.5-2.47 5.5-5.5-2.47-5.5-5.5-5.5zm0 9.5a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
                  </svg>
                  Layover: {flight.layover}
                </span>
              </div>
            )}
          </div>
        </div>

        <button 
          className="button cursor-pointer p-1 sm:p-2 w-full mt-2 sm:mt-4
          bg-gradient-to-b from-[rgba(94,58,238,1)] to-[rgba(197,107,240,1)] 
          text-[10px] sm:text-xs text-white border-0 rounded-full 
          hover:brightness-110 active:scale-95 
          transition-all duration-300"
          onClick={(e) => {
            e.stopPropagation();
            handleBooking();
          }}
        >
          Reservar Boleto(s)
        </button>
      </div>

      {showDetails && (
        <FlightDetailsModal
          flight={flight}
          onClose={handleCloseDetails}
          onBooking={handleBooking}
        />
      )}
      {showBookingForm && (
        <BookingForm
          flight={flight}
          onClose={() => setShowBookingForm(false)}
        />
      )}
    </>
  );
};

export default FlightCard;

