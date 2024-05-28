import React, { useEffect, useState } from "react";
import "../css/index.css";
import {Data } from '../../src/FilterDate/data'

const Filter = ({ addFilters, handleSearch, data, setData }) => {
  const [filters, setFilters] = useState({
    city: {
      dallas: false,
      "san francisco": false,
      denver: false,
    },
    category: {
      one: false,
      two: false,
    },
    type: {
      A: false,
      B: false,
      C: false,
    },
    active: {
      FALSE: false,
      TRUE: false,
    },
  });

  const handleFilterChange = (e) => {
    const { name, id } = e.target;
    const filterCategory = name;
    const filterName = id;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterCategory]: {
        ...prevFilters[filterCategory],
        [filterName]: !prevFilters[filterCategory][filterName],
      },
    }));
    setData(Data)
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFilters(filters);
  };

  const handleSearchChange = (e) => {
    handleSearch(e.target.value);
  };

  useEffect(() => {
    let filteredData;

    const anyFilterActive = Object.values(filters).some(filterObject =>
        Object.values(filterObject).some(filterValue => filterValue === true)
      );
    if (anyFilterActive) {
        filteredData = data.filter(item => {
            return Object.entries(filters).every(([filterKey, filterObject]) => {
              if (Object.values(filterObject).some(filterValue => filterValue === true)) {
                console.log(filterObject, item[filterKey].toLowerCase())
                if(filterKey == 'type') return filterObject[item[filterKey]];
                return filterObject[item[filterKey].toLowerCase()];
              }
              return true;
            });
          });
      } else {
        filteredData = Data;
      }
      
    setData(filteredData)
  }, [filters])
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <div className="form">
          <h2 className="heading-swich">City:</h2>

          <div>
            <div>
              <div className="switch">
                <input
                  type="checkbox"
                  name="city"
                  id="dallas"
                  checked={filters.city.dallas}
                  onChange={handleFilterChange}
                />
                <label htmlFor="dallas" className="slider round"></label>
              </div>
              <span>dallas</span>
            </div>
            <div>
              <div className="switch">
                <input
                  type="checkbox"
                  name="city"
                  id="san francisco"
                  checked={filters.city['san francisco']}
                  onChange={handleFilterChange}
                />
                <label htmlFor="san francisco" className="slider round"></label>
              </div>
              <span>san francisco</span>
            </div>
            <div>
              <div className="switch">
                <input
                  type="checkbox"
                  id="denver"
                  name="city"
                  checked={filters.city.denver}
                  onChange={handleFilterChange}
                />
                <label htmlFor="denver" className="slider round"></label>

              </div>
              <span>denver</span>
            </div>
          </div>
        </div>
        <div className="form">
          <h2 className="heading-swich">Category:</h2>
          <div>
            <div>
              <div className="switch">
                <input
                  type="checkbox"
                  id="one"
                  name="category"
                  checked={filters.category.one}
                  onChange={handleFilterChange}
                />
                <label htmlFor="one" className="slider round"></label>
              </div>
              <span>one</span>
            </div>
            <div>
              <div className="switch">
                <input
                  type="checkbox"
                  id="two"
                  name="category"
                  checked={filters.category.two}
                  onChange={handleFilterChange}
                />
                <label htmlFor="two" className="slider round"></label>
              </div>
              <span>two</span>
            </div>
          </div>
        </div>
        <div className="form">
          <h2 className="heading-swich">Type:</h2>
          <div>
            <div>
              <div className="switch">
                <input
                  type="checkbox"
                  id="A"
                  name="type"
                  checked={filters.type.A}
                  onChange={handleFilterChange}
                />
                <label htmlFor="A" className="slider round"></label>
              </div>
              <span>A</span>
            </div>
            <div>
              <div className="switch">
                <input
                  type="checkbox"
                  id="B"
                  name="type"
                  checked={filters.type.B}
                  onChange={handleFilterChange}
                />
                <label htmlFor="B" className="slider round"></label>
              </div>
              <span>B</span>
            </div>
            <div>
              <div className="switch">
                <input
                  type="checkbox"
                  id="C"
                  name="type"
                  checked={filters.type.C}
                  onChange={handleFilterChange}
                />
                <label htmlFor="C" className="slider round"></label>
              </div>
              <span>C</span>
            </div>
          </div>
        </div>
        <div className="form">
          <h2 className="heading-swich">Active:</h2>
          <div>
            <div>
              <div className="switch">
                <input
                  type="checkbox"
                  id="FALSE"
                  name="active"
                  checked={filters.active.FALSE}
                  onChange={handleFilterChange}
                />
                <label htmlFor="FALSE" className="slider round"></label>
              </div>
              <span>FALSE</span>
            </div>
            <div>
              <div className="switch">
                <input
                  type="checkbox"
                  id="TRUE"
                  name="active"
                  checked={filters.active.TRUE}
                  onChange={handleFilterChange}
                />
                <label htmlFor="TRUE" className="slider round"></label>
              </div>
              <span>TRUE</span>
            </div>
          </div>
        </div>

        <div>
          Search:
          <input
            type="text"
            placeholder="Name"
            value={filters.search}
            onChange={handleSearchChange}
          />
        </div>
      </form>
    </div>
  );
};

export default Filter;
