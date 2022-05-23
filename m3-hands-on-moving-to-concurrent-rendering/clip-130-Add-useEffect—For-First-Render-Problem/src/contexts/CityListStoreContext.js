import { createContext, useContext } from "react";
import { fetchCityListData } from "../dataApi/fetchCityListData";
import { DisplayCountContext } from "./DisplayCountContext";

export const CityListStoreContext = createContext();

function CityListStoreProvider({ children }) {
  const { displayCount } = useContext(DisplayCountContext);

  const resource = fetchCityListData(displayCount);
  const getCities = resource?.cities.read;

  const contextValue = {
    getCities,
  };

  return (
    <CityListStoreContext.Provider value={contextValue}>
      {children}
    </CityListStoreContext.Provider>
  );
}

export { CityListStoreProvider };
