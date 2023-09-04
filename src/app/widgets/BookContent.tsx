import React from 'react';

const BookContent = () => {
  return (
    <div className='-translate-x-5 rounded-lg w-64 h-full flex flex-col items-center bg-[#71C5F4]'>
      <h1 className='text-2xl font-semibold mt-4'>Books Head</h1>
      <p className='pl-10 pr-2 mt-2 text-xs'>
        In a sleepy town, a mechanic struggles to emerge from his dead gangster father`s shadow in a
        mission to win over the love of his life. An honest officer ends up being a chaos agent;
        whilst a reluctant cartel heir has an identity crisis.
      </p>
      <p className='text-sm mt-3 text-gray-100'>Detective-Love-History</p>
      <button
        className='
        bg-transparent transition hover:bg-white mt-3
      text-white font-semibold hover:text-black py-1 px-4 border border-white hover:border-transparent
      '
      >
        Read Now!
      </button>
    </div>
  );
};

export default BookContent;
