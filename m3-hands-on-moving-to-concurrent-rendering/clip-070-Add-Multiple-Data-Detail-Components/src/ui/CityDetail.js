import { CityDetailStoreContext } from "../contexts/CityDetailStoreContext";
import { useContext } from "react";

function CityInfo() {
  const { getCityInfo } = useContext(CityDetailStoreContext);
  const data = getCityInfo();

  return (
    <ul className="list-group list-group-horizontal">
      <li className="list-group-item city-meta">
        Name: <span className="badge">{data.name}</span>
      </li>
      <li className="list-group-item city-meta">
        State: <span className="badge">{data.state}</span>
      </li>
    </ul>
  );
}

function CityStats() {
  const { getCityStats } = useContext(CityDetailStoreContext);
  const data = getCityStats();
  return (
    <ul className="list-group list-group-horizontal">
      <li className="list-group-item city-meta">
        Population:{" "}
        <span className="badge">
          {parseInt(data.population).toLocaleString("en-US")}
        </span>
      </li>
      <li className="list-group-item city-meta">
        Growth Since 2001: <span className="badge">{data.growth}</span>
      </li>
    </ul>
  );
}

function CityLocation() {
  const { getCityLocation } = useContext(CityDetailStoreContext);
  const data = getCityLocation();
  return (
    <ul className="list-group list-group-horizontal">
      <li className="list-group-item city-meta">
        Latitude: <span className="badge">{data.latitude.toFixed(3)}</span>
      </li>
      <li className="list-group-item city-meta">
        Longitude: <span className="badge">{data.longitude.toFixed(3)}</span>
      </li>
    </ul>
  );
}

export default function CityDetail() {
  return (
    <>
      <CityInfo />
      <CityStats />
      <CityLocation />
    </>
  );
}
