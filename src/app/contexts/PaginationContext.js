import React, { createContext, useState, useContext } from 'react';

const PaginationContext = createContext();

export const PaginationProvider = ({ children }) => {
 
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
    pageCount: 15,
    total: 0,
  });

  
  const setPaginationDetails = (paginationDetails) => {
    setPagination(paginationDetails);
  };

  return (
    <PaginationContext.Provider value={{ pagination, setPaginationDetails }}>
      {children}
    </PaginationContext.Provider>
  );
};


export const usePagination = () => {
  const context = useContext(PaginationContext);
  if (!context) {
    throw new Error('usePagination must be used within a PaginationProvider');
  }
  return context;
};
