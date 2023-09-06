import React from 'react';
import Book from './Book';
const BooksSlider = async (books: any) => {
  let threeBooks = books.books.books;
  threeBooks.length = 3;

  return (
    <section className='book-slider w-full mt-8 flex justify-evenly'>
      {threeBooks.map((book: any, i: number) => {
        return <Book key={i} book={book} />;
      })}
    </section>
  );
};

export default BooksSlider;
