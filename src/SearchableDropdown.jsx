import React, { useState } from "react";

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
        <div key={i[uniqueId]}>{i[itemInObjectToShowInDropdown]}</div>
      ))}
    </div>
  );
}
export default SearchableDropdown;
