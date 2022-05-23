import {
  createContext,
  useContext,
  useEffect,
  useState,
  useTransition,
} from "react";
import { fetchCityListData } from "../dataApi/fetchCityListData";
import { DisplayCountContext } from "./DisplayCountContext";

export const CityListStoreContext = createContext();

function CityListStoreProvider({ children }) {
  const [isPending, startTransition] = useTransition();
  const { displayCount } = useContext(DisplayCountContext);
  const [resource, setResource] = useState(fetchCityListData(displayCount));

  useEffect(() => {
    startTransition(() => {
      setResource(fetchCityListData(displayCount));
    });
  }, [displayCount]);

  const getCities = resource?.cities.read;

  const contextValue = {
    isPending,
    getCities,
  };

  return (
    <CityListStoreContext.Provider value={contextValue}>
      {children}
    </CityListStoreContext.Provider>
  );
}

export { CityListStoreProvider };
