import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

  // Implement fetching tourist attractions based on the query and display them

  return (
    <div>
      <h2>Search Results for "{query}"</h2>
      {/* Display fetched tourist attractions */}
    </div>
  );
}

export default SearchResults;
