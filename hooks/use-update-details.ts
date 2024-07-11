import { create } from "zustand";

import { UpdateDetails } from "@/types/ChartType";
import { usePercentileData } from "./use-percentile-data";

type UpdateDetailsState = {
  rank: number;
  percentile: number;
  score: number;
  lastSubmitted: Date;
  isUpdated: boolean;
  addDetails: (data: UpdateDetails) => void;
};

export const useUpdateDetails = create<UpdateDetailsState>((set) => ({
  isUpdated: false,
  rank: 77,
  percentile: 92,
  score: 12,
  lastSubmitted: new Date(),
  addDetails: (data: UpdateDetails) =>
    set((state) => {
      const { addPercentile } = usePercentileData.getState();

      addPercentile(data.percentile);
      return { ...data, isUpdated: true, lastSubmitted: new Date() };
    }),
}));
