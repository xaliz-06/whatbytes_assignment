import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const Internship = () => {
  return (
    <div className="flex-grow max-w-screen-3xl mx-auto w-full py-10 px-4 lg:px-8">
      <Card className="drop-shadow-sm">
        <CardHeader className="gap-y-4 flex-col items-start">
          <CardTitle className="text-2xl font-semibold text-black">
            Welcome to Internship Page
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-y-3">
          <p className="text-lg text-slate-700 tracking-tighter">
            This page will contain all the information regarding internships.
          </p>
          <p className="text-lg text-slate-700 tracking-tighter">
            This page is only visible to signed in users.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Internship;
