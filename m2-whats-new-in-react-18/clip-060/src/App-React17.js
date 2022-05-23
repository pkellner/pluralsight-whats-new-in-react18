import { useState, useEffect } from "react";

function CityList({ displayCount }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/cities?displayCount=${displayCount}`).then((r) => {
      setData(r);
      setLoading(false);
    });
  });

  if (loading) return <div>Loading...</div>;

  return (
    <ul>
      {data.map((rec) => (
        <li key={id}>{rec.name}</li>
      ))}
    </ul>
  );
}
