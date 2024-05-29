import React from "react";
import Search from "@assets/icons/Search.svg";

const TextBox = ({
  changedEvent,
}: {
  changedEvent: (text: string) => void;
}) => {
  return (
    <div className="relative color-[#282B30] sm:w-1/2 lg:w-96">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <Search />
      </div>
      <input
        type="search"
        id="default-search"
        className="block w-full h-11 p-4 ps-10 text-sm bg-[#282B30] text-[#6C727F] rounded-xl placeholder-[#6C727F] focus:border-[#282B30]"
        placeholder="Search by Name, Region, Subregion"
        required
        onChange={(event) => changedEvent(event.target.value)}
      />
    </div>
  );
};

export default TextBox;
