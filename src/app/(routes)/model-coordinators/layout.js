"use client"
import { PaginationProvider } from "@/app/contexts/PaginationContext";




export default function CoordinatorsLayout({ children }) {
  return (
    <>
        <PaginationProvider>
             {children}
        </PaginationProvider>
    </>
  );
}