import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import Carouselitem from '../components/Carouselitem'
import Footer from '../components/Footer'
import UseInitiaState from '../hooks/UseInitialState'

import '../assets/styles/App.css';

const API = 'http://localhost:8000/initalState';

const App = () => {
  const initialState = UseInitiaState(API);
  return (
    <div className="App">
      <Header />
      <Search />

      {initialState.mylist.length > 0 && (
        <Categories title='My list'>
          <Carousel>
          {initialState.mylist.map(item =>
            <Carouselitem key={item.id} {...item} />
          )}
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {initialState.trends.map(item =>
            <Carouselitem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Categories title="Originales de platzi video">
        <Carousel>
        {initialState.originals.map(item =>
            <Carouselitem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
}

export default App;