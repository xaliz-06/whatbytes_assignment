import { PercentileType } from "@/types/ChartType";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAveragePercentile(data: PercentileType[]) {
  const sum = data.reduce((acc, curr) => acc + curr.percentile, 0);
  return sum / data.length;
}
