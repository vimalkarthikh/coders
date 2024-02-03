import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const TheaterSeat = ({ index, isAvailable, onClick }) => {
  return (
    <div
      style={{
        width: '30px',
        height: '30px',
        margin: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '4px',
        overflow: 'hidden',
        border: '1px solid black',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: isAvailable ? 'white' : 'green',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onClick={() => onClick(index)}
      >
        {isAvailable ? 'A' : 'B'}
      </div>
      <p style={{ textAlign: 'center', marginTop: '5px' }}>
        {isAvailable ? 'Available' : 'Taken'}
      </p>
    </div>
  );
};

const Theater = () => {
  const [seats, setSeats] = useState(Array(50).fill(true));
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState('Movie 1'); // Initial movie selection
  const ticketPrice = 140;

  const handleSeatClick = (index) => {
    setSeats((prevSeats) => {
      const newSeats = [...prevSeats];
      newSeats[index] = !newSeats[index];
      return newSeats;
    });

    setSelectedSeats((prevSelectedSeats) => {
      const updatedSelectedSeats = prevSelectedSeats.includes(index)
        ? prevSelectedSeats.filter((seatIndex) => seatIndex !== index)
        : [...prevSelectedSeats, index];
      return updatedSelectedSeats;
    });
  };

  const totalCost = selectedSeats.length * ticketPrice;

  const handleMovieChange = (event) => {
    setSelectedMovie(event.target.value);
  };

  return (
   <>
   <Navbar></Navbar>
    <div className='card mt-5 mx-auto' style={{ maxWidth: '45rem' }}>
      <h3 className='text-center mt-3'>
        Select Movie: &ensp;
        <select value={selectedMovie} onChange={handleMovieChange}>
          <option value='titanic'>Titanic</option>
          <option value='herbie'>Herbie</option>
          <option value='zathura'>Zathura</option>
          <option value='cars'>Cars</option>
          {/* Add more options as needed */}
        </select>
      </h3>
      <h3 className='text-center'>Available Seats: {seats.filter((seat) => seat).length}</h3>
      <div className='mx-auto p-2' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {seats.map((isAvailable, index) => (
          <TheaterSeat
            key={index}
            index={index}
            isAvailable={isAvailable}
            onClick={handleSeatClick}
          />
        ))}
      </div>
      <p className='text-center mt-3'>Total Cost: Rs. {totalCost} INR</p>
      <Link to='/movies' className='mx-auto mb-3'>Back</Link>
    </div>
   </>
  );
};

export default Theater;
