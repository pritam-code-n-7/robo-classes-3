import * as React from "react";

import { Card, CardHeader } from "@/components/ui/card";

export function EnrollCardDemo() {
  return (
    <Card className="w-[500px] h-[230px] bg-custom-gradient rounded-xl flex border-none">
      <div className="p-4">
        <CardHeader className="flex-wrap gap-10">
          <div className="flex flex-col gap-4 text-wrap text-white">
            <div>
              <p className="text-4xl font-bold">We are better </p>
              <p className="text-4xl font-bold">because of you</p>
            </div>
            <p className="text-xl">Our community our strength</p>
          </div>
        </CardHeader>
      </div>
    </Card>
  );
}
