import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [width, setWidth] = useState('0%');
  const [image, setImage] = useState(
    'https://bobsburgers-api.herokuapp.com/images/characters/319.jpg'
  );
}