"use client";
import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";

import { Check, ClipboardCheck, Trophy } from "lucide-react";

import { useUpdateDetails } from "@/hooks/use-update-details";

const Statistics = () => {
  const { rank, percentile, score, isUpdated } = useUpdateDetails();
  return (
    <Card className="drop-shadow-sm p-3">
      <CardHeader className="flex-col gap-y-2 text-center lg:text-start">
        <CardTitle className="text-black font-3xl font-semibold ">
          Quick Statistics
        </CardTitle>
        {!isUpdated && (
          <CardDescription className="text-rose-500">
            This is prefilled data. Your statistics will be updated once you
            submit the form.
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="w-full pt-4 lg:pt-2 px-2 lg:px-4 items-center grid grid-cols-1 gap-y-2 md:grid-cols-3">
        <div className="md:h-32 p-2 flex flex-row md:gap-x-2 items-center justify-between">
          <div className="bg-blue-500/20 rounded-full p-6">
            <Trophy size={48} className="text-blue-500 rounded-full" />
          </div>
          <div className="flex flex-col items-end md:items-center gap-y-2">
            <h6 className="text-3xl text-blue-700 tracking-wide font-bold">
              {rank}
            </h6>
            <h5 className="text-sm lg:text-base text-blue-500/50 font-semibold">
              YOUR RANK
            </h5>
          </div>
          <Separator orientation="vertical" className="hidden md:flex mx-2" />
        </div>
        <div className="md:h-32 p-2 flex flex-row gap-x-2 items-center justify-between">
          <div className="bg-blue-500/20 rounded-full p-6">
            <ClipboardCheck size={48} className="text-blue-500 rounded-full" />
          </div>
          <div className="flex flex-col items-end md:items-center gap-y-2">
            <h6 className="text-3xl text-blue-700 tracking-wide font-bold">
              {percentile}%
            </h6>
            <h5 className="text-sm lg:text-base text-blue-500/50 font-semibold">
              PERCENTILE
            </h5>
          </div>
          <Separator orientation="vertical" className="hidden md:flex mx-2" />
        </div>

        <div className="md:h-32 p-2 flex flex-row gap-x-2 items-center justify-between">
          <div className="bg-blue-500/20 rounded-full p-6">
            <Check size={48} className="text-blue-500 rounded-full" />
          </div>
          <div className="flex flex-col items-end md:items-center gap-y-2">
            <h6 className="text-3xl text-blue-700 tracking-wide font-bold">
              {score} / 15
            </h6>
            <h5 className="text-sm lg:text-base text-blue-500/50 font-semibold">
              CORRECT ANSWERS
            </h5>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Statistics;
