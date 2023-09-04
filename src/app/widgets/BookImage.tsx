import Image from 'next/image';
import React from 'react';

const BookImage = () => {
  return (
    <div className='h-full z-10'>
      <div className='relative' style={{ height: '270px', width: '175px' }}>
        <Image
          className='-translate-x-[3px] translate-y-1.5 scale-110 -rotate-[1deg] select-none'
          src='/book.png'
          width={200}
          height={270}
          style={{ height: '109%' }}
          alt='Book'
        />

        <Image
          className='absolute top-0 left-0 -rotate-[3.8deg] select-none'
          src='/mock-book.jpg'
          width={160}
          height={270}
          style={{ height: '110%' }}
          alt='Book'
        />
      </div>
    </div>
  );
};

export default BookImage;
