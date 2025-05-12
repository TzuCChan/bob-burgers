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

  function Menu() {
    const closeNav = () => {
      setWidth('0px');
    };

    function getCharacter(event) {
      let bobCharacters;
      fetch(
        'https://bobsburgers-api.herokuapp.com/characters/[1,7,26,8,13,3,20,11,39,63,18,10,21,207]'
      )
        .then((response) => response.json())
        .then((data) => {
          bobCharacters = data;

          let character = bobCharacters.find(
            (obj) => obj.name.replaceAll('"', '') === event.target.textContent
          );
          setImage(character.image);
        });
    }

    return (
      <div id="mySidenav" class="sidenav" style={{ width: width }}>
        <a href="javascript:void(0)" class="closebtn" onClick={closeNav}>
          &times;
        </a>
        <a class="character" href="#" onClick={getCharacter}>
          Dottie Minerva
        </a>
        <a class="character" href="#" onClick={getCharacter}>
          Adam
        </a>
        <a class="character" href="#" onClick={getCharacter}>
          Alex Papasian
        </a>
        <a class="character" href="#" onClick={getCharacter}>
          Alfred
        </a>
        <a class="character" href="#" onClick={getCharacter}>
          Allen
        </a>
        <a class="character" href="#" onClick={getCharacter}>
          Allison
        </a>
        <a class="character" href="#" onClick={getCharacter}>
          Amy
        </a>
        <a class="character" href="#" onClick={getCharacter}>
          Angela
        </a>
        <a class="character" href="#" onClick={getCharacter}>
          Angie Moscatone
        </a>
        <a class="character" href="#" onClick={getCharacter}>
          Annie Cragston
        </a>
        <a class="character" href="#" onClick={getCharacter}>
          Asch
        </a>
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