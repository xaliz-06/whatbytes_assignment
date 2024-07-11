"use client";

import React from "react";
import { useMedia } from "react-use";

import Navigation from "./navigation";
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

const Header = () => {
  const isMobile = useMedia("(max-width: 1023px)", false);

  const user = useUser();

  if (!user) {
    return null;
  }

  return (
    <header className="px-4 py-6 lg:px-10 lg:py-10 w-full border-b border-slate-300 shadow-sm">
      <div className="max-w-screen-3xl mx-auto">
        <div className="w-full flex flex-row items-center justify-between">
          <div className="flex items-center lg:gap-x-4">
            <span className="text-3xl font-bold tracking-tight text-black">
              WhatBytes
            </span>
          </div>
          <div className="flex items-center gap-x-2 lg:gap-x-4">
            {!isMobile && (
              <SignedIn>
                <ClerkLoaded>
                  <div className="p-1 pr-2 rounded-full flex flex-row border border-spacing-1 items-center gap-x-2">
                    <UserButton afterSignOutUrl="/" />
                    <span className="font-semibold text-black">
                      {user.user?.fullName || `User`}
                    </span>
                  </div>
                </ClerkLoaded>
                <ClerkLoading>
                  <Loader2 className="size-8 animate-spin text-slate-400" />
                </ClerkLoading>
              </SignedIn>
            )}
            {isMobile && <Navigation />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
