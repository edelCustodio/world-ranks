import Chip from "./Chip";
import { IChip, IChips } from "./chip-model";

const Chips = ({ chips }: IChips) => {
  const chipSelected = (chip: IChip) => {
    console.log(chip.value);
  };

  return (
    <section className="flex flex-row gap-4 flex-wrap">
      {chips.length > 0 &&
        chips.map((chip: IChip, index: number) => (
          <Chip
            key={index}
            text={chip.text}
            value={chip.value}
            chipSelected={chipSelected}
          />
        ))}
    </section>
  );
};

export default Chips;
