"use client"
import { PaginationProvider } from "@/app/contexts/PaginationContext";




export default function ModelsLayout({ children }) {
  return (
    <>
        <PaginationProvider>
             {children}
        </PaginationProvider>
    </>
  );
}