import { useContext } from "react";
import { CityListStoreContext } from "../contexts/CityListStoreContext";

export default function CityList() {
  const { getCities } = useContext(CityListStoreContext);
  const cities = getCities();

  return (
    <div className="container">
      <h1>React 18 with Suspense</h1>
      <div className="col-12">
        <ul className="list-group city--list">
          <li className="list-group-item city--header">City List</li>
          {cities.map((rec) => (
            <li key={rec.id} className="list-group-item list-group-item-action">
              {rec.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
