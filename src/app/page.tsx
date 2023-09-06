import Image from 'next/image';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import BooksSlider from './components/BooksSlider';
import BooksList from './components/BooksList';

export default async function Home() {
  let res = await fetch('https://www.dbooks.org/api/recent');
  let body = await res.json();

  return (
    <>
      <Navbar />

      <main className='bg-[#232222] flex h-full min-h-screen flex-col items-center'>
        <Categories />
        <BooksSlider books={body} />
        <BooksList />
      </main>
    </>
  );
}
