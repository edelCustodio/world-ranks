"use client";

import { useEffect, useState } from "react";
import Chip from "./Chip";
import { IChip, IChips } from "./chip-model";

const Chips = ({ label, chips: chipsData, chipsSelected }: IChips) => {
  const [chips, setChips] = useState<IChip[]>([]);

  useEffect(() => {
    console.log("Aqui");
    chipsSelected && chipsSelected(chips);
  }, [chips]);

  const chipSelected = (chip: IChip) => {
    console.log(chip);
    let chipsUpdated: IChip[] = [];
    if (!chip.active) {
      chipsUpdated = chips.filter((c) => c.value !== chip.value);
    } else {
      chipsUpdated = [...chips, chip];
    }

    setChips(chipsUpdated);
  };

  return (
    <section className="flex flex-col ">
      <div>
        <label className="text-[#6C727F] text-xs">{label}</label>
      </div>

      <div className="flex flex-row gap-4 flex-wrap">
        {chipsData.length > 0 &&
          chipsData.map((chip: IChip, index: number) => (
            <Chip
              key={index}
              text={chip.text}
              value={chip.value}
              chipSelected={chipSelected}
            />
          ))}
      </div>
    </section>
  );
};

export default Chips;
