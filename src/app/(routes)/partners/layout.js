"use client"
import { PaginationProvider } from "@/app/contexts/PaginationContext";




export default function PartnersLayout({ children }) {
  return (
    <>
        <PaginationProvider>
             {children}
        </PaginationProvider>
    </>
  );
}