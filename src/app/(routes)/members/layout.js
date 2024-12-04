"use client"
import { PaginationProvider } from "@/app/contexts/PaginationContext";




export default function MembersLayout({ children }) {
  return (
    <>
        <PaginationProvider>
             {children}
        </PaginationProvider>
    </>
  );
}