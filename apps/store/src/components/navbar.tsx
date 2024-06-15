import Image from 'next/image';
import { BsCart4 } from 'react-icons/bs';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-[var(--z-navbar)] lg:shadow-lg overflow-hidden">
      <div className="max-w-6xl mx-auto p-2 flex justify-between items-center">
        <Image src="/assets/logo.png" alt="logo" width={80} height={80} priority/>
        <div className="relative p-4">
          <div className="absolute top-0 left-10">
            <p className="rounded-full bg-red-500 p-3 text-xs text-white h-2 w-2 flex items-center justify-center">
              3
            </p>
          </div>
          <BsCart4 className="h-8 w-8" />
        </div>
      </div>
    </nav>
  );
}
