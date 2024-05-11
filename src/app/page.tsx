import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@components/ui/card";

import TextBox from "@components/TextBox";

export default function Home() {
  return (
    <Card className="z-[1000px] absolute top-[250px] w-4/5 bg-[#1B1D1F] rounded-xl border-[#282B30]">
      <CardHeader>
        <CardTitle className="text-[#6C727F] text-lg flex justify-between items-center">
          <span>Found 234 countries </span>
          <TextBox />
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <section></section>
        <section></section>
      </CardContent>
    </Card>
  );
}
