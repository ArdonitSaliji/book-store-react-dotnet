import Image from 'next/image';
import React from 'react';

const BooksList = () => {
  return (
    <section className='mt-36'>
      <ul className='flex space-x-8'>
        <li>
          <Image
            className=' select-none'
            src='/mock-book.jpg'
            width={160}
            height={270}
            style={{ height: '110%' }}
            alt='Book'
          />
        </li>
        <li>
          <Image
            className=' select-none'
            src='/mock-book.jpg'
            width={160}
            height={270}
            style={{ height: '110%' }}
            alt='Book'
          />
        </li>
      </ul>
    </section>
  );
};

export default BooksList;
