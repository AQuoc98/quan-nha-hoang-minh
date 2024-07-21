import Image from 'next/image';
import SearchProduct from '../components/search/search-product';
import bannerImg from '../assets/banner.jpeg';

export default function Index() {
  return (
    <main className="px-4">
      <Image alt="banner" src={bannerImg} priority />
      <section className='pt-4'>
        <SearchProduct />
      </section>
    </main>
  );
}
