import { useContext, memo } from "react";
import { CityDetailStoreContext } from "../contexts/CityDetailStoreContext";

export default memo(function CityButton({ city }) {
  let now = performance.now();
  while (performance.now() - now < 3) {
    // Note: this is an INTENTIONALLY EMPTY loop that
    // DOES NOTHING for 3 milliseconds for EACH ITEM.
    //
    // It's meant to emulate what happens in a deep
    // component tree with calculations and other
    // work performed inside components that can't
    // trivially be optimized or removed.
  }

  const { setCityId } = useContext(CityDetailStoreContext);
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setCityId(city.id);
      }}
      className="list-group-item list-group-item-action"
    >
      {city.name}
    </button>
  );
});

/*
let now = performance.now();
  while (performance.now() - now < 3) {
    // Note: this is an INTENTIONALLY EMPTY loop that
    // DOES NOTHING for 3 milliseconds for EACH ITEM.
    //
    // It's meant to emulate what happens in a deep
    // component tree with calculations and other
    // work performed inside components that can't
    // trivially be optimized or removed.
  }
 */
