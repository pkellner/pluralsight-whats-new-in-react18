import { Suspense } from "react";
function App({ displayCount }) {
  const specialPromiseResource = createSpecialPromise(
    `/api/cities?displayCount=${displayCount}`
  );
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RenderComponent resource={specialPromiseResource} />
    </Suspense>
  );
}

function RenderComponent({ specialPromiseResource }) {
  const cities = specialPromiseResource.cities.read();
  return (
    <ul>
      {cities.map((rec) => (
        <li key={rec.id}>{rec.name}</li>
      ))}
    </ul>
  );
}
function createSpecialPromise(url) {
  const cityPromise = fetchCityPromise(url);
  return {
    // wrapPromise does work of returning data
    //  or throws special return handled internally
    //  by suspense. (next module for details...)
    cities: wrapPromise(cityPromise),
  };
}
