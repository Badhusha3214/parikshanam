"use client"
import { PaginationProvider } from "@/app/contexts/PaginationContext";




export default function techniciansLayout({ children }) {
  return (
    <>
        <PaginationProvider>
             {children}
        </PaginationProvider>
    </>
  );
}