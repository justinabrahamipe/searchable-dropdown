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
  const filterArray = (i) => {
    return i[itemInObjectToShowInDropdown]
      ?.toLowerCase()
      ?.includes(textfieldValue);
  };
  return (
    <div>
      <input
        type="text"
        onChange={handleTextfieldChange}
        value={textfieldValue}
      />
      {listOfValues?.filter(filterArray).map((i) => (
        <Dropdown key={i[uniqueId]} item={i[itemInObjectToShowInDropdown]} />
      ))}
    </div>
  );
}
export default SearchableDropdown;
