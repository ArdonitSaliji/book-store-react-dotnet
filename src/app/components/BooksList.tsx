import Image from 'next/image';
import React from 'react';
import { PopularCategories, NewBookCategories } from '../Const/BookCategories';

const BooksList = () => {
  return (
    <div className='all-books flex w-full h-full mt-36 mb-12'>
      <aside className='w-72 pb-6 h-fit flex flex-col pl-7 bg-[#242121] border border-[#393939] rounded'>
        {/* Popular books */}
        <div>
          <p className='underline text-xs underline-offset-8 mt-5 mb-3'>Popular Categories</p>
          <div className='w-full'>
            <ul className='product-categories-ul'>
              {PopularCategories.map((book, i) => {
                return (
                  <li key={i}>
                    <label htmlFor={book}>
                      <input id={book} type='checkbox' />
                      {book}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div>
          <p className='underline text-xs underline-offset-8 mt-5 mb-3'>New Books Categories</p>
          <div className='w-full'>
            <ul className='product-categories-ul'>
              {NewBookCategories.map((book, i) => (
                <li key={i}>
                  <label htmlFor={book}>
                    <input id={book} type='checkbox' />
                    {book}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* New Books */}
      </aside>

      <section className='w-full h-auto'>
        <ul className='all-books-grid h-auto grid grid-cols-5 gap-y-14 w-full justify-center'>
          <li className='w-full h-full flex justify-center'>
            <Image
              className=' select-none'
              src='/mock-book.jpg'
              width={160}
              height={270}
              alt='Book'
            />
          </li>
          <li className='w-full flex justify-center'>
            <Image
              className=' select-none'
              src='/mock-book.jpg'
              width={160}
              height={270}
              alt='Book'
            />
          </li>
          <li className='w-full flex justify-center'>
            <Image
              className=' select-none'
              src='/mock-book.jpg'
              width={160}
              height={270}
              alt='Book'
            />
          </li>
          <li className='w-full flex justify-center'>
            <Image
              className=' select-none'
              src='/mock-book.jpg'
              width={160}
              height={270}
              alt='Book'
            />
          </li>
          <li className='w-full flex justify-center'>
            <Image
              className=' select-none'
              src='/mock-book.jpg'
              width={160}
              height={270}
              alt='Book'
            />
          </li>
          <li className='w-full flex justify-center'>
            <Image
              className=' select-none'
              src='/mock-book.jpg'
              width={160}
              height={270}
              alt='Book'
            />
          </li>
          <li className='w-full flex justify-center'>
            <Image
              className=' select-none'
              src='/mock-book.jpg'
              width={160}
              height={270}
              alt='Book'
            />
          </li>
        </ul>
      </section>
    </div>
  );
};

export default BooksList;
