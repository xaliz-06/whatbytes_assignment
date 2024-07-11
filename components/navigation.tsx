"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState } from "react";
import { useMedia } from "react-use";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Award, BarChart2, MenuIcon, StickyNote } from "lucide-react";

import { cn } from "@/lib/utils";

const Navigation = () => {
  const pathname = usePathname();

  const isMobile = useMedia("(max-width: 1023px)", false);

  const [isOpen, setIsOpen] = useState(false);

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Button
            variant="outline"
            size="sm"
            className="font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none outline-none focus-visible:ring-offset-0 focus-visible:ring-transparent text-black focus:bg-white/30 transition"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <MenuIcon size={32} />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="p-0">
          <nav className="flex flex-none pt-16 ">
            <div className=" flex flex-col gap-y-2 w-full">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex flex-row items-center gap-x-3 px-6 py-4",
                  pathname === "/"
                    ? "text-blue-500 bg-blue-500/10 rounded-r-full w-[90%]"
                    : "text-slate-700"
                )}
              >
                <BarChart2 size={24} />
                <span className="text-xl font-semibold">Dashboard</span>
              </Link>

              <Link
                href="/skill-test"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex flex-row items-center gap-x-3 px-6 py-4",
                  pathname === "/skill-test"
                    ? "text-blue-500 bg-blue-500/10 rounded-r-full w-[90%]"
                    : "text-slate-700"
                )}
              >
                <Award size={24} />
                <span className="text-xl font-semibold">Skill Test</span>
              </Link>

              <Link
                href="/internship"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex flex-row items-center gap-x-3 px-6 py-4",
                  pathname === "/internship"
                    ? "text-blue-500 bg-blue-500/10 rounded-r-full w-[90%]"
                    : "text-slate-700"
                )}
              >
                <StickyNote size={24} />
                <span className="text-xl font-semibold">Internship</span>
              </Link>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <nav className="hidden lg:flex flex-none sticky top-0 h-screen w-[15vw] border border-r-slate-300 shadow-sm pt-16 ">
      <div className=" flex flex-col gap-y-2 w-full">
        <Link
          href="/"
          className={cn(
            "flex flex-row items-center gap-x-3 px-6 py-4",
            pathname === "/"
              ? "text-blue-500 bg-blue-500/10 rounded-r-full w-[90%]"
              : "text-slate-700"
          )}
        >
          <BarChart2 size={24} />
          <span className="text-xl font-semibold">Dashboard</span>
        </Link>

        <Link
          href="/skill-test"
          className={cn(
            "flex flex-row items-center gap-x-3 px-6 py-4",
            pathname === "/skill-test"
              ? "text-blue-500 bg-blue-500/10 rounded-r-full w-[90%]"
              : "text-slate-700"
          )}
        >
          <Award size={24} />
          <span className="text-xl font-semibold">Skill Test</span>
        </Link>

        <Link
          href="/internship"
          className={cn(
            "flex flex-row items-center gap-x-3 px-6 py-4",
            pathname === "/internship"
              ? "text-blue-500 bg-blue-500/10 rounded-r-full w-[90%]"
              : "text-slate-700"
          )}
        >
          <StickyNote size={24} />
          <span className="text-xl font-semibold">Internship</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
