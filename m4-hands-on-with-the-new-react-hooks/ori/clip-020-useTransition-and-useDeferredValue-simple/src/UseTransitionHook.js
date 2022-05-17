import { useState, useEffect, useTransition } from "react";
import { fetchCities } from "./data/cities";

export default function UseTransitionHook() {
  const [cities, setCities] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    fetchCities(20).then((data) => {
      startTransition(() => {
        setCities(data);
      });
    });
  }, []);

  console.log("isPending", isPending);

  return isPending === true ? (
    <div>Loading...</div>
  ) : (
    <ul>
      {cities.map(({ name, id }) => {
        return <li key={id}>{name}</li>;
      })}
    </ul>
  );
}
