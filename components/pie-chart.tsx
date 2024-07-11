"use client";

import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import PieVariant from "./pie-variant";

import { InputType } from "@/types/ChartType";
import { useUpdateDetails } from "@/hooks/use-update-details";

const TOTAL_QUESTIONS = 15;

const PieChart = () => {
  const { score } = useUpdateDetails();

  let supplementaryMessage;

  if (score === 0) {
    supplementaryMessage = "You need to study more.";
  } else if (score >= 1 && score <= 5) {
    supplementaryMessage = "You can do better.";
  } else if (score >= 6 && score <= 10) {
    supplementaryMessage = "However, it still needs some improvements";
  } else if (score >= 11 && score <= 14) {
    supplementaryMessage = "You are almost there.";
  } else {
    supplementaryMessage = "You are a genius!";
  }
  const message = `You scored ${score} questions correct out of ${TOTAL_QUESTIONS} questions.`;

  const data: InputType[] = [
    {
      name: "correct",
      value: score,
    },
    {
      name: "incorrect",
      value: TOTAL_QUESTIONS - score,
    },
  ];

  return (
    <Card className="drop-shadow-sm p-3">
      <CardHeader className="flex text-center text-2xl font-semibold lg:text-start w-full flex-col lg:flex-row lg:justify-between gap-y-2 items-center">
        <CardTitle className="text-black">Question Analysis</CardTitle>
        <h2 className=" text-blue-500">
          {score}/{TOTAL_QUESTIONS}
        </h2>
      </CardHeader>
      <CardContent className="pt-2 flex flex-col gap-y-8">
        <CardDescription className="text-base text-slate-700">
          <span className="font-semibold">{message}</span>{" "}
          {supplementaryMessage}
        </CardDescription>
        <PieVariant data={data} />
      </CardContent>
    </Card>
  );
};

export default PieChart;
