import Image from 'next/image';
import React from 'react';
import BookSliderImage from '../widgets/BookSliderImage';
const BooksSlider = () => {
  return (
    <section className='w-full mt-8 flex justify-evenly'>
      <BookSliderImage />
      <BookSliderImage />
      <BookSliderImage />
    </section>
  );
};

export default BooksSlider;
