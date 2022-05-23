import { useContext, useState, memo, useDeferredValue } from "react";
import { CityListStoreContext } from "../contexts/CityListStoreContext";
import { CityDetailStoreProvider } from "../contexts/CityDetailStoreContext";

// code similar to example by React Team: https://github.com/reactwg/react-18/discussions/129#discussioncomment-2439125

const ListItem = ({ id, name }) => {
  let now = performance.now();
  while (performance.now() - now < 5) {
    // This loop is intentially here just to drag the component
    // down in a hard running loop.  It could represent something
    // like a complex calculation involving drawing a city shape
    // or something else compute intensive. It's mean to represent
    // work that can not be easily optimized or removed.
  }

  return (
    <li key={id} className="list-group-item list-group-item-action">
      {name}
    </li>
  );
};

const CityListResult = memo(({ cities, searchText }) => (
  <>
    {cities
      .filter(({ name }) => {
        return (
          searchText.length === 0 ||
          name.toLowerCase().includes(searchText.toLowerCase())
        );
      })
      .map((rec) => (
        <ListItem key={rec.id} id={rec.id} name={rec.name} />
      ))}
  </>
));

export default function CityList({ children }) {
  const { getCities, isPending } = useContext(CityListStoreContext);
  const cities = getCities();
  const [searchText, setSearchText] = useState("");
  const deferredText = useDeferredValue(searchText);

  return (
    <CityDetailStoreProvider initialCityId={cities[0].id}>
      <div className="container">
        <h1>React 18 with Suspense</h1>
        <div className="row">
          <div className="col-12">
            <ul className="list-group city--list">
              <li className="list-group-item city--header">
                City List {isPending ? "updating..." : ""}
              </li>
              <li className="list-group-item city--header">
                <input
                  type="search"
                  placeholder="Search"
                  onChange={(e) => {
                    setSearchText(e.target.value);
                  }}
                />
              </li>
              <li className="list-group-item city--header">
                Search Text: {deferredText}
              </li>
              <CityListResult cities={cities} searchText={deferredText} />
            </ul>
          </div>
        </div>
      </div>
    </CityDetailStoreProvider>
  );
}
