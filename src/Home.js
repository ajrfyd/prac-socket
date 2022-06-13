import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [room, setRoom] = useState('');

  const goToRoom = (e) => {
    e.preventDefault();
    setRoom('');
    navigate(`/room/${room}`);
  }

  return (
    <div style={{ width: '100%', height: '400px', backgroundColor: 'yellow', padding: '1rem', textAlign: 'center', borderRadius: '5px' }}>
      <h1 style={{ marginBottom: '3rem'}}>
        Welcome!
      </h1>
      <h2 style={{ marginBottom: '1rem'}}>
        Choose Room
      </h2>
      <form className='form2' onSubmit={goToRoom}>
        <input type="text" className='input' placeholder='Insert Room Number' value={room} onChange={(e) => setRoom(e.target.value)}/>
        <button type='submit'>
          Join
        </button>
      </form>
    </div>
  )
}

export default Home;