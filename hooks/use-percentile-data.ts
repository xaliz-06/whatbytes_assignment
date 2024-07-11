import { create } from "zustand";

import { PERCENTILE_DATA } from "@/data/percentile-data";
import { PercentileType } from "@/types/ChartType";

type PercentileState = {
  percentileData: PercentileType[];
  addPercentile: (data: number) => void;
};

export const usePercentileData = create<PercentileState>((set) => ({
  percentileData: PERCENTILE_DATA,
  addPercentile: (data: number) =>
    set((state) => {
      const newPercentileData = [...state.percentileData];
      const percentileIndex = state.percentileData.findIndex(
        (p) => p.percentile === data
      );

      if (percentileIndex === -1) {
        newPercentileData.push({ percentile: data, noOfStudents: 1 });
      } else {
        newPercentileData[percentileIndex].noOfStudents += 1;
      }

      return { percentileData: newPercentileData };
    }),
}));
