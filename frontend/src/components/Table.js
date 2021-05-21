import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);
  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null && sortConfig.value === 1) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    } else if (sortConfig !== null && sortConfig.value === 2) {
      console.log("2");
      const res = sortableItems.filter((item) => {
        return item.name.toLowerCase().startsWith(sortConfig.key.toLowerCase());
      });
      sortableItems = res;
    }
    return sortableItems;
  }, [items, sortConfig]);

  const onSearch = (key) => {
    setSortConfig({ key: key, direction: null, value: 2 });
  };

  const requestSort = (key) => {
    let direction = "descending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "descending"
    ) {
      direction = "ascending";
    }
    setSortConfig({ key, direction, value: 1 });
  };

  return { items: sortedItems, requestSort, sortConfig, onSearch };
};

const ProductTable = (props) => {
  useEffect(() => {
    requestSort("percentage");
  }, []);

  const { items, requestSort, sortConfig, onSearch } = useSortableData(
    props.products
  );
  const [value, setValue] = useState("");
  const [reseting, setReseting] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const reset = () => {
    setReseting(true);
    setTimeout(() => {
      onSearch("");
      requestSort("percentage");
      setValue("");
      setReseting(false);
    }, 1000);
  };
  return (
    <div className="container">
      <div className="row mb-3 ">
        <Link to="/" className="my-4" style={{ textDecoration: "none" }}>
          <i className="fas fa-chevron-left mx-2"></i>Back to Home
        </Link>
        <div className="col-lg-12 text-center">
          <h1 className="mt-5">
            <i className="fas fa-crown mr-4" style={{ color: "orangered" }}></i>
            Leaderboard{" "}
          </h1>
        </div>

        <div className="col-lg-11 align-self-end text-right mt-4">
          <input
            class="form-control mr-sm-2 d-inline"
            type="search"
            placeholder="Search"
            aria-label="Search"
            style={{ maxWidth: "240px" }}
            value={value}
            onChange={handleChange}
          />
          <button
            class="btn btn-outline-success mt-2 my-sm-0 mr-2"
            onClick={() => onSearch(value)}
          >
            Search
          </button>

          <i
            className={
              reseting
                ? "fas fa-sync-alt fa-spin  my-3"
                : "fas fa-sync-alt   my-3"
            }
            onClick={reset}
            style={{ color: "red" }}
          ></i>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-lg-10">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">
                  Roll No
                  <i
                    class="fas fa-sort mx-1"
                    onClick={() => requestSort("rollNo")}
                  ></i>
                </th>
                <th scope="col">
                  Name{" "}
                  <i
                    class="fas fa-sort mx-1"
                    onClick={() => requestSort("name")}
                  ></i>
                </th>
                <th scope="col">
                  Maths
                  <i
                    class="fas fa-sort mx-1"
                    onClick={() => requestSort("maths")}
                  ></i>
                </th>
                <th scope="col">
                  Physics
                  <i
                    class="fas fa-sort mx-1"
                    onClick={() => requestSort("phy")}
                  ></i>
                </th>
                <th scope="col">
                  Chemistry
                  <i
                    class="fas fa-sort mx-1"
                    onClick={() => requestSort("chem")}
                  ></i>
                </th>
                <th scope="col">
                  Total Marks
                  <i
                    class="fas fa-sort mx-1"
                    onClick={() => requestSort("totalMarks")}
                  ></i>
                </th>
                <th scope="col">
                  Percentage
                  <i
                    class="fas fa-sort mx-1"
                    onClick={() => requestSort("percentage")}
                  ></i>
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.rollNo}>
                  <td>{item.rollNo} </td>
                  <td>{item.name} </td>
                  <td>{item.maths}</td>
                  <td>{item.phy}</td>
                  <td>{item.chem}</td>
                  <td>{item.totalMarks}</td>
                  <td>{item.percentage.toFixed(2)}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default function Table({ products }) {
  return <ProductTable products={products} />;
}
