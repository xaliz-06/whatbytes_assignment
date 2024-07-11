"use client";

import Header from "@/components/header";
import Navigation from "@/components/navigation";
import { useMedia } from "react-use";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  const isMobile = useMedia("(max-width: 1023px)", false);

  return (
    <>
      <main>
        <Header />
        <div className="flex flex-row">
          {!isMobile && <Navigation />}
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;
