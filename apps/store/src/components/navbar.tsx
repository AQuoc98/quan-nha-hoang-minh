import Image from 'next/image';
import logoPic from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="sticky top-0 overflow-hidden shadow-md p-3 h-24">
      <Image src={logoPic} alt="logo" className="w-20 h-full" />
    </nav>
  );
}
