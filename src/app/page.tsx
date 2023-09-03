import Image from 'next/image';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import BooksSlider from './components/BooksSlider';

export default function Home() {
  return (
    <>
      <Navbar />

      <main className='bg-[#232222] flex min-h-screen flex-col items-center'>
        <Categories />
        <BooksSlider />
      </main>
    </>
  );
}
