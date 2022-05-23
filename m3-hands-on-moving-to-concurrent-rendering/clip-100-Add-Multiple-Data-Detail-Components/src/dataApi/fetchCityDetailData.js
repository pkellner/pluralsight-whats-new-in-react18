import {
  fetchCityInfo,
  fetchCityLocation,
  fetchCityStats,
} from "../data/cities";

export function fetchCityDetailData(cityId) {
  const cityInfoPromise = fetchCityInfo(cityId);
  const cityStatsPromise = fetchCityStats(cityId);
  const cityLocationPromise = fetchCityLocation(cityId);
  return {
    cityInfo: wrapPromise(cityInfoPromise),
    cityStats: wrapPromise(cityStatsPromise),
    cityLocation: wrapPromise(cityLocationPromise),
  };
}

function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}
