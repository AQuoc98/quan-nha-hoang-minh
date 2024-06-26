import Image from 'next/image';
import bannerPic from '../assets/banner.jpeg';

export default function Banner() {
  return (
    <section className="relative px-3">
      <Image alt="banner" src={bannerPic} priority />
    </section>
  );
}
