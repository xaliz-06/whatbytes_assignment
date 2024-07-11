import React from "react";

import Summary from "@/components/summary-card";
import Syllabus from "@/components/syllabus-card";
import Statistics from "@/components/statistics-card";
import PieChart from "@/components/pie-chart";
import LineChart from "@/components/line-chart";

const SkillTest = () => {
  return (
    <div className="flex-grow max-w-screen-3xl mx-auto w-full py-10 px-4 lg:px-8">
      <div className="p-3">
        <h2 className="text-2xl font-semibold text-black tracking-tighter">
          Skill Test
        </h2>
      </div>
      <div className="p-3 pt-5 grid grid-cols-1 gap-y-8 lg:grid-cols-8 gap-x-8 ">
        <div className="lg:col-span-5 flex flex-col gap-y-8">
          <Summary />
          <Statistics />
          <LineChart />
        </div>
        <div className="lg:col-span-3 flex flex-col gap-y-8">
          <Syllabus />
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default SkillTest;
