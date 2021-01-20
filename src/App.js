import React from 'react';
import SlotM from './SlotMachin'


const App = () => {
  return (
    <>
      <h1 className="heading_style">🎰 Welcome  to{" "}
        <span style={{ fontWeight: 'Bold' }}> Slot machine game</span> 🎰
    </h1>
      <div className="slotmachine">
        <SlotM x='😄' y='😄' z='😄' />
        <hr />
        <SlotM x='😏' y='😆' z='😏' />
        <hr />
        <SlotM x='🍎' y='🍌' z='🍎' />
        <hr />
        <SlotM x='❤️' y='❤️' z='❤️' />
      </div>
    </>
  );

};

export default App;