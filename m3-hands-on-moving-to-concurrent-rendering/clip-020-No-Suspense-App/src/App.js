import "./App.css";
import { useEffect, useState } from "react";
import { fetchCities } from "./data/cities";

const displayCount = 10;

function App() {
  const [cities, setCities] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCities(displayCount).then((data) => {
      setCities(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1>React 18 no Suspense</h1>
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

export default App;
