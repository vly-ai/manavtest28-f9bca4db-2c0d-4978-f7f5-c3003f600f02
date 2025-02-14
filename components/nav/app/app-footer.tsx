import React from "react";
import Link from "next/link";

/**
 * Footer for the dashboard pages
 * @returns 
 */
export function Footer() {
  return (
    <footer className="h-12 border-t flex items-center justify-between bg-background text-xs w-full">
      <div className="font-semibold pl-16 ml-px">vly.ai (YC F24) treehacks template</div>
      <div className="flex items-center gap-4 px-4">
        <Link
          href="/terms"
          className="text-muted-foreground hover:text-foreground"
        >
          Terms
        </Link>
        <Link
          href="/privacy"
          className="text-muted-foreground hover:text-foreground"
        >
          Privacy
        </Link>
      </div>
    </footer>
  );
}
