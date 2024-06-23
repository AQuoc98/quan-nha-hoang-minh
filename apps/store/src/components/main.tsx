import { ReactNode } from 'react';
import Navbar from './navbar';
import { SearchProvider } from '../utils/contexts/SearchContext';

export default function Main({ children }: { children: ReactNode }) {
  return (
    <SearchProvider>
      <main>
        <Navbar />
        {children}
      </main>
    </SearchProvider>
  );
}
