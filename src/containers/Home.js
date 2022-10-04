import React from 'react';
import Navbar from './Nav';
import PokemonList from '../components/PokemonList';
import style from '../assets/styles/home.module.css';

const Home = () => (
  <>
    <Navbar />
    <div className={style.homeHeader}>
      <h1>Welcome to the PokeDex</h1>
      <p>Click your favorite Pokemon below</p>
    </div>
    <PokemonList />
  </>
);

export default Home;
