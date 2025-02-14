import HomeNavbar from "@/components/nav/home/home-navbar";
import HomeFooter from "@/components/nav/home/home-footer";
import { ReactNode } from "react";

/**
 * Landing page layout. All routes under the /(landing) file path will be rendered within this component.
 * @param param0 
 * @returns 
 */
export default function LandingPageLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <HomeNavbar />
      <main>{children}</main>
      <HomeFooter />
    </div>
  );
}
