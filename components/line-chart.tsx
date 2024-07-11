"use client";

import React from "react";
import { useMedia } from "react-use";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { LineChartIcon } from "lucide-react";

import LineVariant from "./line-variant";

import { getAveragePercentile } from "@/lib/utils";
import { useUpdateDetails } from "@/hooks/use-update-details";
import { usePercentileData } from "@/hooks/use-percentile-data";

const LineChart = () => {
  const isMobile = useMedia("(max-width: 1023px)", false);

  const { percentile } = useUpdateDetails();
  const { percentileData } = usePercentileData();

  let average_percentile = getAveragePercentile(percentileData);

  let yourPercentileData = percentileData.find(
    (p) => p.percentile === percentile
  );

  if (!yourPercentileData) {
    yourPercentileData = {
      percentile: percentile,
      noOfStudents: 0,
    };
  }

  let message = `You scored ${percentile}% percentile`;
  let supplementaryMessage;

  if (percentile > average_percentile) {
    supplementaryMessage = ` which is more than the average percentile ${average_percentile.toFixed(
      2
    )} of all the engineers who took this assignment.`;
  }

  percentileData.sort((a, b) => a.percentile - b.percentile);

  return (
    <Card className="drop-shadow-sm py-2 px-3">
      <CardHeader className="flex-row justify-between items-center text-center lg:text-start">
        <CardTitle className="text-black font-3xl font-semibold ">
          Comparison Graph
        </CardTitle>
        {!isMobile && (
          <div className="bg-blue-500/20 rounded-full p-2">
            <LineChartIcon size={28} className="text-blue-500 rounded-full" />
          </div>
        )}
      </CardHeader>
      <CardContent className="pt-2 flex flex-col gap-y-8">
        <CardDescription className="text-lg text-slate-700">
          <span className="font-semibold">{message}</span>{" "}
          {supplementaryMessage}
        </CardDescription>
        <LineVariant
          data={percentileData}
          yourPercentileData={yourPercentileData}
        />
      </CardContent>
    </Card>
  );
};

export default LineChart;
