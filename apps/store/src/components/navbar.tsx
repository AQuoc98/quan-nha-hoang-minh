import Image from 'next/image';
import logoPic from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="h-24 sticky p-3 shadow-xl">
      <Image src={logoPic} alt="logo" className="h-full w-20" />
    </nav>
  );
}
