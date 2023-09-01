import { useEffect, useState } from "react";
// const useFetch = require("./useFetch");
// const url = "<http://localhost:4000/api/profiles>";
// const { data, loading, error } = useFetch(url);

const useFetch = (url) => {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        seterror(data.error);
        setdata(data);
        setloading(false);
      })
      .catch((error) => {
        seterror(error.message);
        setloading(false);
      });
  }, [url]);

  return console.log(data), { data, loading, error };
};

export default useFetch;
