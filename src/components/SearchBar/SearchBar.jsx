import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css'; // Import the CSS file

const SearchBar = ({onSearch}) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search-results?query=${query}`);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Destination lookup📍"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
