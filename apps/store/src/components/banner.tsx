import Image from 'next/image';

export default function Banner() {
  return (
    <div className="relative max-w-6xl mx-auto h-80 md:h-[32rem] lg:h-[32rem]">
      <Image alt="banner" fill src="/assets/banner.jpeg" sizes="100%" />
    </div>
  );
}
