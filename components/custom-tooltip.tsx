import { Separator } from "./ui/separator";

export const CustomTooltip = ({ active, payload }: any) => {
  if (!active) return null;

  const percentile = payload[0].payload.percentile;
  const students = payload[0].payload.noOfStudents;

  return (
    <div className="rounded-sm bg-white shadow-sm border overflow-hidden">
      <div className="text-sm p-2 px-3 bg-muted text-muted-foreground">
        {percentile}%
      </div>
      <Separator />
      <div className="p-2 px-3 space-y-1">
        <div className="flex items-center justify-between gap-x-4">
          <div className="flex items-center gap-x-2">
            <div className="size-1.5 bg-green-500 rounded-full" />
            <p className="text-sm text-muted-foreground">No. of Students: </p>
          </div>
          <p className="text-sm text-right font-medium">{students}</p>
        </div>
      </div>
    </div>
  );
};
