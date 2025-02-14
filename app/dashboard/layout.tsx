'use client';
import { Navbar } from "@/components/nav/app/app-navbar";
import { Sidebar } from "@/components/nav/app/app-sidebar";
import { ReactNode } from "react";
import { Footer } from "@/components/nav/app/app-footer";

/**
 * The dashboard page layout. All routes under /dashboard will be rendered within this component.
 * @param param0 
 * @returns 
 */
export default function DashboardPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background flex flex-col w-full">
      <Navbar />
      <div className="flex-1 flex w-full">
        <Sidebar />
        <main className="flex-1 p-4 ml-12 w-full">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
