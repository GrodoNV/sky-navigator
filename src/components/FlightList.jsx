import React from 'react';
import FlightCard from './FlightCard';

const FlightList = ({ flights }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {flights.map(flight => (
        <FlightCard key={flight.id} flight={flight} />
      ))}
    </div>
  );
};

export default FlightList;

