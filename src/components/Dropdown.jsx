import React from "react";

export default function Dropdown({
  uniqueId,
  listOfValues,
  itemInObjectToShowInDropdown,
  textfieldValue,
  onSelect,
}) {
  const filterArray = (i) =>
    i[itemInObjectToShowInDropdown]?.toLowerCase()?.includes(textfieldValue);
  return (
    <>
      {listOfValues?.filter(filterArray).map((i) => (
        <div
          key={i[uniqueId]}
          role="button"
          tabIndex={0}
          onClick={() => {
            onSelect(i);
          }}
          onKeyDown={() => {
            onSelect(i);
          }}
        >
          {i[itemInObjectToShowInDropdown]}
        </div>
      ))}
    </>
  );
}
