import React, { memo } from "react";

// Note: this file is exactly the same in both examples.

function ListItem({ children }) {
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
  return <div className="ListItem">{children}</div>;
}

export default memo(function MySlowList({ searchText, cities }) {
  return (
    <>
      <p>
        <b>Results for "{searchText}":</b>
      </p>
      <ul className="List">
        {cities
          .filter(({name}) => {
            return (
              searchText.length === 0 ||
              name.toLowerCase().includes(searchText.toLowerCase())
            );
          }).map((city) => {
          return <ListItem key={city.id}>{city.name}</ListItem>;
        })}
      </ul>
    </>
  );
});
