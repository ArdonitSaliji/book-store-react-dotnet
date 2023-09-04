import React from 'react';
import Book from './Book';
const BooksSlider = () => {
  return (
    <section className='w-full mt-8 flex justify-evenly'>
      <Book />
      <Book />
      <Book />
    </section>
  );
};

export default BooksSlider;
