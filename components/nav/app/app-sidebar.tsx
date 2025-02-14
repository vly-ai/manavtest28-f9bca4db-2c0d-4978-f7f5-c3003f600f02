import React, { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  Settings,
  BarChart3,
  Folders,
  LogOut,
  User,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PersonIcon } from "@radix-ui/react-icons";

/**
 * Sidebar for the dashboard pages. Currently still default content.
 * TODO: replace navigation items with correct links that reflect the application structure
 * @returns 
 */
export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigationItems = [
    {
      icon: LayoutDashboard,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: Users,
      label: "Team",
      href: "/team",
    },
    {
      icon: Folders,
      label: "Projects",
      href: "/projects",
    },
    {
      icon: BarChart3,
      label: "Analytics",
      href: "/analytics",
    },
    {
      icon: Settings,
      label: "Settings",
      href: "/dashboard/settings",
    },
  ];
  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-screen border-r bg-background transition-all duration-300 ease-in-out z-30",
        isExpanded ? "w-56" : "w-12",
      )}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="p-3 border-b">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.png" className="w-6 h-6" />
          {isExpanded && <span className="font-semibold text-sm">vly.ai</span>}
        </Link>
      </div>
      <nav className="p-1 space-y-1">
        {navigationItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center space-x-2 px-2 py-1.5 rounded-md hover:bg-accent transition-colors"
          >
            <item.icon className="w-4 h-4 shrink-0" />
            {isExpanded && <span className="text-sm">{item.label}</span>}
          </Link>
        ))}
      </nav>
      <div className="absolute bottom-0 w-full p-2 border-t bg-background">
        <div className="flex items-center space-x-2 py-1.5">
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
            <PersonIcon className="h-4 w-4" />
          </Button>
          {isExpanded && (
              <div className="flex-1">
                <p className="text-xs font-medium">Username</p>
                <p className="text-xs text-muted-foreground overflow-hidden">Email Address</p>
              </div>
            )}
        </div>
      </div>
    </aside>
  );
}
