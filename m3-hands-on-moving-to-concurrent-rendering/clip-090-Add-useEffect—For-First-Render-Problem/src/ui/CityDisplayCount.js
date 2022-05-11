import { useContext } from "react";
import { DisplayCountContext } from "../contexts/DisplayCountContext";

export default function CityDisplayCount() {
  const { displayCount, setDisplayCount } = useContext(DisplayCountContext);

  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      {[3, 5, 10].map((buttonCnt) => {
        return (
          <button
            type="button"
            key={buttonCnt}
            className={
              displayCount === buttonCnt
                ? "btn btn-secondary active"
                : "btn btn-secondary"
            }
            onClick={() => {
              setDisplayCount(buttonCnt);
            }}
          >
            {buttonCnt}
          </button>
        );
      })}
    </div>
  );
}
