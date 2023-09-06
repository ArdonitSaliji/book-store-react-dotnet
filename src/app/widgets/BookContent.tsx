import Link from 'next/link';
import React from 'react';

const BookContent: React.FC<any> = ({ book }) => {
  let authors = book.authors.split(',');
  authors.length >= 4 && (authors.length = 4);
  authors.join(',');
  let arrayOfAuthors = Array.from(new Set(authors));
  let shortenedAuthors = Array.from(new Set(authors)).toString();

  return (
    <div
      style={{ minWidth: '100px' }}
      className='book-content -translate-x-5 rounded-lg w-64 h-64 flex flex-col justify-evenly items-center bg-[#71C5F4]'
    >
      <h1 className='text-center text-2xl font-semibold mt-4'>{book.title}</h1>
      <p className='px-5 text-center mt-2 text-xs'>
        {book.subtitle ? book.subtitle : 'No subtitle'}
      </p>
      <p className='text-center text-sm mt-3 text-gray-100'>
        {arrayOfAuthors.length >= 4 ? shortenedAuthors + '...' : shortenedAuthors}
      </p>
      <Link
        className='
        bg-transparent transition hover:bg-white my-3
      text-white font-semibold hover:text-black py-1 px-4 border border-white hover:border-transparent
      '
        href={book.url}
        target='_blank'
      >
        Read Now!
      </Link>
    </div>
  );
};

export default BookContent;
