import "./App.css";
import CityList from "./ui/CityList";
import { Suspense } from "react";
import { CityListStoreProvider } from "./contexts/CityListStoreContext";
import { DisplayCountProvider } from "./contexts/DisplayCountContext";
import CityDisplayCount from "./ui/CityDisplayCount";

const displayCount = 100;
function App() {
  return (
    <DisplayCountProvider initialDisplayCount={displayCount}>
      <CityDisplayCount />
      <CityListStoreProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <CityList />
        </Suspense>
      </CityListStoreProvider>
    </DisplayCountProvider>
  );
}

export default App;
