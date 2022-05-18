import {
  createContext,
  useContext,
  useTransition,
  useState,
  useEffect,
} from "react";
import { fetchCityListData } from "../dataApi/fetchCityListData";
import { DisplayCountContext } from "./DisplayCountContext";

export const CityListStoreContext = createContext();

function CityListStoreProvider({ children }) {
  const { displayCount } = useContext(DisplayCountContext);
  const [isPending, startTransition] = useTransition();
  const [resource, setResource] = useState(fetchCityListData(displayCount));

  useEffect(() => {
    startTransition(() => {
      setResource(fetchCityListData(displayCount));
    });
  }, [displayCount]);

  // const resource = fetchCityListData(displayCount);
  const getCities = resource?.cities.read;

  const contextValue = {
    getCities,
    isPending,
  };

  return (
    <CityListStoreContext.Provider value={contextValue}>
      {children}
    </CityListStoreContext.Provider>
  );
}

export { CityListStoreProvider };
