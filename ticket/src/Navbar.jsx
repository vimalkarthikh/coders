import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Navbar = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    toast.success("Logout Successful");
    navigate('/');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <Link className="navbar-brand text-white" to='/movies'>Theater Seat</Link>
        <button className="btn btn-outline-danger" type="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
