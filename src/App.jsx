import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [width, setWidth] = useState('0%');
  const [image, setImage] = useState(
    'https://bobsburgers-api.herokuapp.com/images/characters/319.jpg'
  );

  function Title() {
    return (
      <div className="title">
        <h1>Bob's Burger's</h1>
      </div>
    );
  }

  function Burger() {
    const openNav = () => {
      setWidth('20%');
    };
    return (
      <div id="icon" onClick={openNav}>
        🍔
      </div>
    );
  }

  function Character() {
    return (
      <div class="container">
        <img id="mainImg" src={image} alt="character" />
      </div>
    );
  }

  return (
    <div className="App">
      <Title />
      <Burger />
      <Character />
      <Menu />
    </div>
  );
}