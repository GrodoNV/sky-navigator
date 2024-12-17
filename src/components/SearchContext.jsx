import React, { createContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchData, setSearchData] = useState({ origin: "", destination: "" });

  const clearSearch = () => setSearchData({ origin: "", destination: "" });

  return (
    <SearchContext.Provider value={{ searchData, setSearchData, clearSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
