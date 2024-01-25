import React, { useState } from 'react';
import countryData from './resources/countryData.json';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [isDropdownVisible, setDropdownVisibility] = useState(false);

  const handleChange = (e) => {
    const newSearchTerm = e.target.value.toLowerCase();
    setSearchTerm(newSearchTerm);

    if (newSearchTerm === '') {
      setDropdownVisibility(false);
    } 
    
    else {
      const filtered = countryData.filter((country) => country.name.toLowerCase().startsWith(newSearchTerm))
      setFilteredResults(filtered);
      setDropdownVisibility(true);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      console.log(e.key)
      setDropdownVisibility(false);
    }
  };

  return (
    <div className="App">
      <div>
        <div>
          <input type="text" value={searchTerm} onChange={handleChange} onKeyDown={handleKeyPress}
          />
          <button onClick={() => setDropdownVisibility(!isDropdownVisible)}>Search</button>
        </div>
        <div style={{ display: isDropdownVisible ? 'block' : 'none' }}>
          {filteredResults.map((country) => (
            <div key={country.name}>
              {country.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
