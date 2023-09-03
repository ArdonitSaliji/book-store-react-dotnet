import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='bg-[#292929] px-10 py-4 h-auto flex justify-between items-center'>
      <Image
        className='relative cursor-pointer dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
        src='/next.svg'
        alt='Next.js Logo'
        width={130}
        height={25}
        priority
      />

      <div className='flex items-center w-[30rem] rounded-lg h-8 bg-[#373737]'>
        <Image className='dark:invert mx-3' src='/search.svg' alt='Search' width={25} height={25} />
        <input
          placeholder='Search for books...'
          className='w-full h-full bg-transparent outline-none'
          type='text'
        />
      </div>

      <div>
        <Image
          className='cursor-pointer'
          src='/favorites.svg'
          alt='Favorites'
          width={30}
          height={30}
        />
      </div>
    </nav>
  );
};

export default Navbar;
