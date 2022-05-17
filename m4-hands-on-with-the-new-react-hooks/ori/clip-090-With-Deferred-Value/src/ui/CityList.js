import { useContext, Fragment, useState, useDeferredValue } from "react";
import { CityListStoreContext } from "../contexts/CityListStoreContext";
import { CityDetailStoreProvider } from "../contexts/CityDetailStoreContext";
import CityButton from "./CityButton";
import MySlowList from "../misc/MySlowList";

const CityListResults = ({ cities, searchText }) => {
  return (
    <>
      {cities
        .filter(({ name }) => {
          return (
            searchText.length === 0 ||
            name.toLowerCase().includes(searchText.toLowerCase())
          );
        })
        .map((rec) => (
          <Fragment key={rec.id}>
            <CityButton city={rec} />
          </Fragment>
        ))}
    </>
  );
};

export default function CityList({ children }) {
  const [text, setText] = useState("");
  const deferredText = useDeferredValue(text);

  const { getCities } = useContext(CityListStoreContext);
  const cities = getCities();

  return (
    <CityDetailStoreProvider initialCityId={cities[0].id}>
      <div className="container">
        <h1>React 18 with Suspense</h1>
        <div className="row">
          <div className="col-3">
            <ul className="list-group city--list">
              <li className="list-group-item city--header">City List</li>
              <li className="list-group-item city--header">
                <input
                  type="search"
                  placeholder="Search"
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                />
              </li>
              {/*<CityListResults cities={cities} searchText={deferredText} />*/}
              <MySlowList searchText={deferredText} cities={cities} />
            </ul>
          </div>
          <div className="col-9">
            <div className="city--details">
              <div className="list-group-item city--header">City Details</div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </CityDetailStoreProvider>
  );
}
