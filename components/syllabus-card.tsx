"use client";

import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

type SyllabusType = {
  id: string;
  title: string;
  progress: number;
};

const COLORS = [
  "bg-sky-500",
  "bg-emerald-500",
  "bg-rose-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-purple-500",
  "bg-yellow-500",
  "bg-green-400",
];

const TEXT_COLORS = [
  "text-sky-500",
  "text-emerald-500",
  "text-rose-500",
  "text-pink-500",
  "text-indigo-500",
  "text-purple-500",
  "text-yellow-500",
  "text-green-400",
];

const syllabus: SyllabusType[] = [
  {
    id: "1",
    title: "HTML Tools, Forms, History",
    progress: 80,
  },
  {
    id: "2",
    title: "Tags & References in HTML",
    progress: 60,
  },
  {
    id: "3",
    title: "Tables & References in HTML",
    progress: 24,
  },
  {
    id: "4",
    title: "Tables & CSS Basics",
    progress: 96,
  },
];

const Syllabus = () => {
  return (
    <Card className="drop-shadow-sm p-3">
      <CardHeader className="flex flex-row text-center lg:text-start">
        <CardTitle className="text-2xl font-semibold text-black">
          Syllabus Wise Analysis
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4 flex flex-col gap-y-6">
        {syllabus.map((item) => (
          <div className="flex flex-col gap-y-2" key={item.id}>
            <h4 className="text-slate-500 text-lg tracking-tight">
              {item.title}
            </h4>
            <div className="flex flex-row items-center justify-between gap-x-6 lg:gap-x-4">
              <Progress
                indicatorColor={COLORS[(parseInt(item.id) % COLORS.length) - 1]}
                className="rounded-lg h-2 w-full"
                value={item.progress}
              />
              <span
                className={`text-xl font-semibold ${
                  TEXT_COLORS[(parseInt(item.id) % TEXT_COLORS.length) - 1]
                }`}
              >
                {item.progress}%
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Syllabus;
