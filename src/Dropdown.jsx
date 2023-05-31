import React, { useState } from "react";

function SearchableDropdown({ listOfValues, onSelect }) {
  const [textfieldValue, setTextfieldValue] = useState("");
  const handleTextfieldChange = (event) => {
    setTextfieldValue(event.target.value);
  };
  const filterArray = (i) => {
    return i.toLowerCase().includes(textfieldValue);
  };
  return (
    <div>
      <input
        type="text"
        onChange={handleTextfieldChange}
        value={textfieldValue}
      />
      {listOfValues?.filter(filterArray).map((i) => (
        <div>{i}</div>
      ))}
    </div>
  );
}
export default SearchableDropdown;
