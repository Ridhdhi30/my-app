
import React, { useState } from 'react';
import {Data } from '../src/FilterDate/data'
import Table from './componant/Table';
import Filter from './componant/Filter';
import "./App.css"
function App() {
  const [filteredData, setFilteredData] = useState(Data);
  const [searchQuery, setSearchQuery] = useState('');


  const addFilters = (filters) => {
    setFilteredData(filteredData.filter(item => {
      return (
        item.city === filters.city &&
        item.category === filters.category &&
        item.type === filters.type &&
        item.active === filters.active
      );
    }));
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = Data.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div className="App">
      <Filter addFilters={addFilters} handleSearch={handleSearch} data={filteredData} setData={setFilteredData}/>
      <Table data={filteredData} />
    </div>
  );
}

export default App;
