import { useContext, useState } from "react";
import { CityListStoreContext } from "../contexts/CityListStoreContext";
import { CityDetailStoreProvider } from "../contexts/CityDetailStoreContext";

const ListItem = ({ id, name }) => {
  let now = performance.now();
  while(performance.now() - now < 5) {} // intentially made to drag component down
  return (
    <li key={id} className="list-group-item list-group-item-action">
      {name}
    </li>
  );
}

const CityListResult = ({ cities, searchText }) => (
  <>
    {cities
      .filter(({ name }) => {
        return (
          searchText.length === 0 || name.toLowerCase().includes(searchText.toLowerCase())
        );
      })
      .map((rec) => (
        <ListItem key={rec.id} id={rec.id} name={rec.name} />
      ))
    }
  </>
)

export default function CityList({ children }) {
  const { getCities, isPending } = useContext(CityListStoreContext);
  const cities = getCities();
  const [searchText, setSearchText] = useState("");

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
                <input type="search" placeholder="Search"
                  onChange={(e) => {
                    setSearchText(e.target.value);
                  }} />
              </li>
              <li className="list-group-item city--header">
                Search Text: {searchText}
              </li>
              <CityListResult cities={cities} searchText={searchText} />
            </ul>
          </div>
        </div>
      </div>
    </CityDetailStoreProvider>
  );
}
