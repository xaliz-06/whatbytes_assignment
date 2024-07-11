"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState } from "react";
import { useMedia } from "react-use";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Award, BarChart2, Loader2, MenuIcon, StickyNote } from "lucide-react";

import { cn } from "@/lib/utils";
// import { auth } from "@clerk/nextjs/server";

const Navigation = () => {
  const pathname = usePathname();

  const isMobile = useMedia("(max-width: 1023px)", false);

  // const { userId } : { userId: string | null } = auth();

  const [isOpen, setIsOpen] = useState(false);

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <SignedIn>
            <ClerkLoaded>
              <UserButton afterSignOutUrl="/" />
            </ClerkLoaded>
            <ClerkLoading>
              <Loader2 className="size-8 animate-spin text-slate-400" />
            </ClerkLoading>
          </SignedIn>
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
          <nav className="flex pt-16 flex-col">
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
            <div className="pt-6 flex flex-col gap-y-2 w-full items-center">
              <SignedOut>
                <SignInButton>
                  <Button className="bg-blue-600 text-lg text-white w-[85%] p-2">
                    Sign In
                  </Button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <SignOutButton>
                  <Button className="bg-rose-600 text-lg text-white w-[85%] p-2">
                    Sign Out
                  </Button>
                </SignOutButton>
              </SignedIn>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <nav className="hidden lg:flex flex-none lg:flex-col sticky top-0 h-screen w-[15vw] border border-r-slate-300 shadow-sm pt-16 ">
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
      <div className="pt-6 flex flex-col items-center gap-y-2">
        <SignedOut>
          <SignInButton>
            <Button className="bg-blue-600 text-lg text-white w-[85%] p-2">
              Sign In
            </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <SignOutButton>
            <Button className="bg-rose-600 text-lg text-white w-[85%] p-2">
              Sign Out
            </Button>
          </SignOutButton>
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navigation;
