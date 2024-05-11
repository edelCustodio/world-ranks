"use client";

import { useState } from "react";
import { IChip } from "./chip-model";
import classNames from "classnames";

const Chip = ({ text, value, chipSelected }: IChip) => {
  const [active, setActive] = useState(false);

  const chipClass = classNames("cursor-pointer text-[#6C727F] text-sm p-2", {
    "border-2 border-[#6C727F] p-2 rounded-xl bg-[#1B1D1F]": active,
  });

  const selected = () => {
    setActive((act) => !act);
    chipSelected && chipSelected({ text, value } as IChip);
  };

  return (
    <div className={chipClass} onClick={selected}>
      {text}
    </div>
  );
};

export default Chip;
