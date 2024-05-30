import React, { useId } from "react";
import { ICheckBox } from "./checkbox-model";

const CheckBox = ({ name, text, checkedEvent }: ICheckBox) => {
  const checkBoxId = useId();
  return (
    <div className="flex items-center mb-4 gap-2">
      <input
        id={checkBoxId}
        type="checkbox"
        onChange={(event) => checkedEvent(name, event.target.checked)}
        className=" w-6 h-6 border-2 border-blue-500 rounded-sm "
      />
      <label
        htmlFor={checkBoxId}
        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {text}
      </label>
    </div>
  );
};

export default CheckBox;
