"use client";
import React from "react";

import { useMedia } from "react-use";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { PercentileType } from "@/types/ChartType";
import { CustomTooltip } from "./custom-tooltip";
import { useUpdateDetails } from "@/hooks/use-update-details";

type Props = {
  data: PercentileType[];
  yourPercentileData: PercentileType;
};

const LineVariant = ({ data, yourPercentileData }: Props) => {
  const { isUpdated } = useUpdateDetails();

  const isMobile = useMedia("(max-width: 1023px)", false);

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <Legend
          layout="horizontal"
          verticalAlign="bottom"
          align="right"
          iconType="circle"
          content={() => (
            <div className="mt-4 flex flex-col items-center">
              {isUpdated ? (
                <>
                  <span className="text-sm text-emerald-500">
                    Your Percentile: {yourPercentileData.percentile}%
                  </span>
                  <span className="text-sm text-blue-500">
                    No. of Students: {yourPercentileData.noOfStudents}
                  </span>
                </>
              ) : (
                <>
                  <span className="text-rose-500">
                    Please Update to See Score
                  </span>
                </>
              )}
            </div>
          )}
        />
        <XAxis
          axisLine={false}
          tickLine={false}
          dataKey="percentile"
          tickFormatter={(value) => `${value}%`}
          style={{ fontSize: "12px" }}
          tickMargin={16}
        />
        {!isMobile && (
          <YAxis
            dataKey="noOfStudents"
            style={{ fontSize: "12px" }}
            tickMargin={16}
          />
        )}
        <Tooltip content={<CustomTooltip />} />
        <Line
          dot={true}
          dataKey="noOfStudents"
          strokeWidth={2}
          stroke="#3b82f6"
          className="drop-shadow-sm"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineVariant;
