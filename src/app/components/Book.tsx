import React from 'react';
import BookImage from '../widgets/BookImage';
import BookContent from '../widgets/BookContent';
const Book = (book: any) => {
  return (
    <div className='slider-book relative flex justify-center items-center'>
      <BookImage image={book.book.image} />
      <BookContent book={book.book} />
    </div>
  );
};

export default Book;
