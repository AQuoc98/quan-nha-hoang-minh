'use client';

import { ReactNode, createContext, useContext, useReducer } from 'react';

interface SearchState {
  product: string;
}

type Action =
  | { type: 'SET_PRODUCT_SEARCH'; payload: string }
  | { type: 'RESET_PRODUCT_SEARCH' };

const initialState: SearchState = { product: '' };

const searchReducer = (state: SearchState, action: Action): SearchState => {
  switch (action.type) {
    case 'SET_PRODUCT_SEARCH':
      return { ...state, product: action.payload };
    case 'RESET_PRODUCT_SEARCH':
      return { ...state, product: '' };
    default:
      return state;
  }
};

interface SearchContextProps {
  searchState: SearchState;
  dispatch: React.Dispatch<Action>;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchState, dispatch] = useReducer(searchReducer, initialState);

  return (
    <SearchContext.Provider value={{ searchState, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = (): SearchContextProps => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }

  return context;
};
