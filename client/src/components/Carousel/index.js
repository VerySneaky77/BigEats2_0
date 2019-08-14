import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import './style.css';

const items = [
  {
    src: 'http://www.nisiadigital.com.br/wp-content/uploads/2013/06/Pizza-pizza-30424279-1024-768.jpg',
    altText: 'Pizza'
  },
  {
    src: 'http://myfoodvoice.me/wp-content/uploads/2011/03/Burgers.jpg',
    altText: 'Burgers'
  },
  {
    src: 'http://i.ytimg.com/vi/0y9fSgUwNuo/maxresdefault.jpg',
    altText: 'Chicken'
  },
  {
    src: 'https://rapidbrandsinc.com/wp-content/uploads/2017/05/Screenshot.png',
    altText: 'Hot Dog'
  }
];

const CarouselHome = () => <UncontrolledCarousel indicators={false} items={items} controls={false}/>;

export default CarouselHome;