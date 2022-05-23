import { createContext, useState } from "react";
import { fetchCityDetailData } from "../dataApi/fetchCityDetailData";

export const CityDetailStoreContext = createContext();

function CityDetailStoreProvider({ initialCityId, children }) {
  const [resourceCityDetail, setResourceCityDetail] = useState(
    fetchCityDetailData(initialCityId)
  );

  const setCityId = (cityId) => {
    setResourceCityDetail(fetchCityDetailData(cityId));
  };

  const getCityInfo = resourceCityDetail.cityInfo.read;
  const getCityStats = resourceCityDetail.cityStats.read;
  const getCityLocation = resourceCityDetail.cityLocation.read;

  const contextValue = {
    setCityId,
    getCityInfo,
    getCityStats,
    getCityLocation,
  };

  return (
    <CityDetailStoreContext.Provider value={contextValue}>
      {children}
    </CityDetailStoreContext.Provider>
  );
}

export { CityDetailStoreProvider };
