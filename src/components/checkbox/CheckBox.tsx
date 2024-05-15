import React, { useId } from "react";
import { ICheckBox } from "./checkbox-model";

const CheckBox = (check: ICheckBox) => {

    const checkBoxId = useId();
  return (
    <div className="flex items-center mb-4 gap-2">
      <input
        id={checkBoxId}
        type="checkbox"
        checked={check.value}
        onChange={(event) => check.checkedEvent && check.checkedEvent(event.target.checked)}
        className="appearance-none w-4 h-4 border-2 border-blue-500 rounded-sm bg-white"
      />
      <label
        htmlFor={checkBoxId}
        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {check.text}
      </label>
    </div>
  );
};

export default CheckBox;
