import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './features/navBar/NavBar';
import Rockets from './features/Rockets/Rockets';
import Missions from './features/Missions/MissionsList';
import MyProfile from './features/MyProfile/MyProfile';
import './App.css';

function App() {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="Missions" element={<Missions />} />
        <Route path="MyProfile" element={<MyProfile />} />
      </Routes>
    </main>
  );
}

export default App;
