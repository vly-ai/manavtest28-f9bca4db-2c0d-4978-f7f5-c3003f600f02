
"use client";
 
import { CoreFunctionalityRequirement } from "@/components/nav/CoreFunctionalityRequirement";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ReactNode } from "react";
 
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
 
/**
 * DO NOT CHANGE OR EDIT THE FILE. IT IS ABSOLUTELY CRITICAL TO LEAVE IT HOW IT IS
 * @param param0 
 * @returns 
 */
export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return (
    <ConvexProvider client={convex}>
      {children}
      <CoreFunctionalityRequirement />
    </ConvexProvider>
  );
}