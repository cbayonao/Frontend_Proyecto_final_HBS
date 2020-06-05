import React, { useState } from 'react';

const SearchParams = () => {
  const [location, updateLocation] = useState('Seattle, WA');

  return (
    <div className="search-params">
      <h1>{location}</h1>
      <form>
        <label htmlFor="location">
          Location
          <input id="location" value={location}
          placeholder="Location"
          onChange={event => updateLocation
            (event.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
