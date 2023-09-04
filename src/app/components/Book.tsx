import React from 'react';
import BookImage from '../widgets/BookImage';
import BookContent from '../widgets/BookContent';
const Book = () => {
  return (
    <div className='relative w-full flex justify-center items-center'>
      <BookImage />
      <BookContent />
    </div>
  );
};

export default Book;
