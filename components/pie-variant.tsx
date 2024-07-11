"use client";

import React from "react";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

import { InputType } from "@/types/ChartType";

type Props = {
  data: InputType[];
};

const COLORS = ["#3b82f6", "#f43f5e"];

const PieVariant = ({ data }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <PieChart>
        <Legend
          layout="horizontal"
          verticalAlign="bottom"
          align="right"
          iconType="circle"
          content={({ payload }: any) => {
            return (
              <ul className="flex flex-col space-y-0">
                {payload.map((entry: any, index: number) => (
                  <li
                    key={`item-${index}`}
                    className="flex items-center space-x-2"
                  >
                    <span
                      className="size-2 rounded-full"
                      style={{ backgroundColor: entry.color }}
                    />
                    <div className="space-x-1">
                      <span className="text-sm text-muted-foreground">
                        {entry.payload.value}
                      </span>
                      <span className="text-sm">
                        {entry.payload.name.charAt(0).toUpperCase() +
                          entry.payload.name.slice(1)}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            );
          }}
        />
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieVariant;
