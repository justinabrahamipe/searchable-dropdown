import React, { useState } from "react";
import Dropdown from "./Dropdown";

function SearchableDropdown({
  listOfValues,
  onSelect,
  uniqueId,
  itemInObjectToShowInDropdown,
}) {
  const [textfieldValue, setTextfieldValue] = useState("");
  const handleTextfieldChange = (event) => {
    setTextfieldValue(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        onChange={handleTextfieldChange}
        value={textfieldValue}
      />
      <Dropdown
        uniqueId={uniqueId}
        listOfValues={listOfValues}
        onSelect={onSelect}
        itemInObjectToShowInDropdown={itemInObjectToShowInDropdown}
        textfieldValue={textfieldValue}
      />
    </div>
  );
}
export default SearchableDropdown;
