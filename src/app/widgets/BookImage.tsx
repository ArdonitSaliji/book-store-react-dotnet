import Image from 'next/image';
import React from 'react';

const BookImage: React.FC<any> = ({ image }) => {
  return (
    <div className='book-image-container z-10'>
      <div
        className='relative slider-book-images'
        style={{ height: '270px', width: '175px', minWidth: '100px' }}
      >
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
          src={image}
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
