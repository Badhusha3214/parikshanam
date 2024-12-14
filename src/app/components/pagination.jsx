"use client"
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePagination } from "../contexts/PaginationContext";
import { LeftIcon, RightIcon } from "./ui/icons";
import { useEffect, useState } from "react";
import { isBrowser } from "../utils/isBrowser";

const Pagination = () => {
  const { pagination, setPaginationDetails } = usePagination();
  const { page, pageCount } = pagination;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobileView = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    if(isBrowser()){
        checkMobileView()
        window.addEventListener('resize', checkMobileView);
        return () => window.removeEventListener('resize', checkMobileView);
    }

   
  }, []);

  
  if (pageCount <= 1) return null;

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pageCount) {
      setPaginationDetails({ ...pagination, page: newPage });
    }
  };

  const getPageNumbers = () => {
    const pages = [];

    
    if (isMobile) {
      if (pageCount <= 3) {
      
        for (let i = 1; i <= pageCount; i++) {
          pages.push(i);
        }
      } else {
       
        if (page <= 2) {
          pages.push(1, 2, '...', pageCount);
        } else if (page >= pageCount - 1) {
          pages.push(1, '...', pageCount - 1, pageCount);
        } else {
          pages.push(1, '...', page, '...', pageCount);
        }
      }
    } 
   
    else {
      if (pageCount <= 7) {
        for (let i = 1; i <= pageCount; i++) {
          pages.push(i);
        }
      } else {
        if (page <= 3) {
          pages.push(1, 2, 3, 4, 5, '...', pageCount);
        } else if (page >= pageCount - 2) {
          pages.push(1, '...', pageCount - 4, pageCount - 3, pageCount - 2, pageCount - 1, pageCount);
        } else {
          pages.push(1, '...', page - 1, page, page + 1, '...', pageCount);
        }
      }
    }

    return pages;
  };

  return (
    <div className="flex justify-center items-center space-x-2 my-10 md:my-20">
      <button
        disabled={page === 1}
        onClick={() => handlePageChange(page - 1)}
        className="disabled:opacity-50"
      >
        <LeftIcon /> 
      </button>

      {getPageNumbers().map((pageNum, index) => (
     <button
     key={index}
     onClick={() => typeof pageNum === 'number' && handlePageChange(pageNum)}
     disabled={pageNum === '...'}
     className={`${
       page === pageNum ? 'bg-black text-white' : 'bg-gray-200'
     } w-11 h-11 flex items-center justify-center rounded-full ${pageNum === '...' ? 'cursor-default' : ''}`}
   >
     {pageNum}
   </button>
   
    
      ))}

      <button
        disabled={page === pageCount}
        onClick={() => handlePageChange(page + 1)}
        className="disabled:opacity-50 hover:opacity-85"
      >
        <RightIcon /> 
      </button>
    </div>
  );
};

export default Pagination;
