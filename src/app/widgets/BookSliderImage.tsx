import Image from 'next/image';
import React from 'react';

const BookSliderImage = () => {
  return (
    <div className='relative w-full flex justify-center items-center'>
      <div className='h-full z-10'>
        <div className='relative' style={{ height: '225px', width: '175px' }}>
          <Image
            className='-translate-x-1 translate-y-1 scale-110'
            src='/book.png'
            width={200}
            height={225}
            alt='Book'
          />

          <Image
            className='absolute top-0 left-0 -rotate-[4deg]'
            src='/mock-book.jpg'
            width={160}
            height={225}
            alt='Book'
          />
        </div>
      </div>
      <div className='-translate-x-5 rounded-lg w-64 h-full flex justify-center bg-[#71C5F4]'>
        <h1 className='text-3xl font-semibold mt-4'>Books Head</h1>
      </div>
    </div>
  );
};

export default BookSliderImage;
