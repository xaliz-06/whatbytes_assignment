import React from "react";

import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

import Image from "next/image";
import FormDialog from "./form-dialog";

const Summary = () => {
  return (
    <Card className="drop-shadow-sm">
      <CardHeader className="gap-y-4 flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-6 items-center">
          <Image src={`/images/html5.png`} alt="html5" width="64" height="64" />
          <div className="flex flex-col gap-y-2 text-center lg:text-start">
            <CardTitle className="text-2xl font-semibold text-black">
              HyperText Markup Language
            </CardTitle>
            <CardDescription className="text-base text-slate-700">
              Questions: 08 | Duration: 15 minutes | Submitted: 5 June 2024
            </CardDescription>
          </div>
        </div>

        <div>
          <FormDialog />
        </div>
      </CardHeader>
    </Card>
  );
};

export default Summary;
