import logo from "./logo.svg";
import "./App.css";
import SearchableDropdown from "../components/SearchableDropdown";
import COUNTRIES from "../data/data";

function App() {
  const onSelect = (item) => console.log(item);
  return (
    <div className="App">
      <SearchableDropdown
        listOfValues={COUNTRIES}
        itemInObjectToShowInDropdown="name"
        onSelect={onSelect}
        uniqueId="name"
      />
    </div>
  );
}
export default App;
