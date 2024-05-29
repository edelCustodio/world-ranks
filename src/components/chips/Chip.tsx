"use client";

import { useState } from "react";
import { IChip } from "./chip-model";
import classNames from "classnames";

const Chip = ({ text, value, chipSelected }: IChip) => {
  const [active, setActive] = useState(false);

  const chipClass = classNames(
    "cursor-pointer text-[#6C727F] text-sm border-2 border-[#1B1D1F] p-2 rounded-xl bg-[#1B1D1F]",
    {
      "text-[#D2D5DA] bg-[#282B30]": active,
    }
  );

  const selected = () => {
    const activeUpdate = !active;
    setActive(activeUpdate);
    chipSelected &&
      chipSelected({ text, value, active: activeUpdate } as IChip);
  };

  return (
    <div className={chipClass} onClick={selected}>
      {text}
    </div>
  );
};

export default Chip;
