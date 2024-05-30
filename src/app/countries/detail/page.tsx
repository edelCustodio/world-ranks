import { Card, CardContent } from "@components/ui/card";
import React from "react";

const CountryDetail = () => {
  return (
    <Card className="z-[1000px] absolute top-[250px] bg-[#1B1D1F] rounded-xl border-[#282B30] w-2/4">
      <CardContent className="grid grid-cols-12 gap-4">
        Country Detail
      </CardContent>
    </Card>
  );
};

export default CountryDetail;
