'use client';

import { ReactNode, createContext, useContext, useReducer } from 'react';

interface SearchState {
  product: string;
}

export enum SearchActionType {
  SetProductSearch = 'SET_PRODUCT_SEARCH',
  ResetProductSearch = 'RESET_PRODUCT_SEARCH',
}

type Action =
  | { type: SearchActionType.SetProductSearch; payload: string }
  | { type: SearchActionType.ResetProductSearch; payload?: never };

interface SearchContextProps {
  searchState: SearchState;
  dispatch: React.Dispatch<Action>;
}

const initialState: SearchState = { product: '' };

const actionHandlers: {
  [K in SearchActionType]?: (state: SearchState, action: Action) => SearchState;
} = {
  [SearchActionType.SetProductSearch]: (state, action) => {
    return {
      ...state,
      product: action.payload as string,
    };
  },
  [SearchActionType.ResetProductSearch]: (state) => ({ ...state, product: '' }),
};

const searchReducer = (state: SearchState, action: Action): SearchState => {
  const handler = actionHandlers[action.type];
  return handler ? handler(state, action) : state;
};

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [searchState, dispatch] = useReducer(searchReducer, initialState);

  return (
    <SearchContext.Provider value={{ searchState, dispatch }}>{children}</SearchContext.Provider>
  );
};

export const useSearchContext = (): SearchContextProps => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }

  return context;
};
