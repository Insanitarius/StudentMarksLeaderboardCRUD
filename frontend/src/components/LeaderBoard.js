import React, { useEffect, useState } from "react";
import Table from "./Table";
import Axios from "axios";

function LeaderBoard() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    Axios.get(process.env.REACT_APP_FETCHSTUDENTS).then((response) => {
      setProducts(response.data);
    });
  }, []);

  return <Table products={products} />;
}

export default LeaderBoard;
