import "./App.css";
import CityList from "./ui/CityList";
import { Suspense } from "react";
import { CityListStoreProvider } from "./contexts/CityListStoreContext";

const displayCount = 5;
function App() {
  return (
    <CityListStoreProvider displayCount={displayCount}>
      <Suspense fallback={<div>Loading...</div>}>
        <CityList />
      </Suspense>
    </CityListStoreProvider>
  );
}

export default App;
