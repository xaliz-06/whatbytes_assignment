"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Dashboard = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/skill-test");
  };

  return (
    <div className="flex-grow max-w-screen-3xl mx-auto w-full py-10 px-4 lg:px-8">
      <Card className="drop-shadow-sm">
        <CardHeader className="gap-y-4 flex-col items-start">
          <CardTitle className="text-2xl font-semibold text-black">
            Welcome to the Dashboard
          </CardTitle>
          <CardDescription className="text-lg text-slate-700 tracking-tighter">
            This page contains details about my submission for the assignment
          </CardDescription>
        </CardHeader>
        <CardContent className="px-6 py-4">
          <div className="flex-col space-y-2">
            <p className="tracking-tighter">
              Please go the Skill Test page for the page as shown in the
              assignment video
            </p>
            <p className="tracking-tighter">
              The Skill Page has some prefilled data for the assignment purpose.
              Please update the data as per your requirement to see the
              functionality.
            </p>
            <p className="tracking-tighter">
              As this web-app is not connected to any backend, the data will not
              be stored. On page refresh, you will see the prefilled data.
            </p>
          </div>
          <div className="pt-8">
            <Button
              className="bg-blue-600 text-white hover:bg-blue-600/30 w-60 h-14 text-xl"
              onClick={handleClick}
            >
              Continue to Skill Test
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
