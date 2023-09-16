import React, { useState } from 'react';
import { BiFilter} from 'react-icons/bi';

const FilterDropdown = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleFilterChange = (filterOption) => {
    toggleDropdown();
    onFilterChange(filterOption);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        type="button"
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-amber-500"
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        Filter
       <BiFilter size={15} />
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute z-10 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1  ring-amber-500 ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div className="py-1" role="none">
            <button
              onClick={() => handleFilterChange('alphabetical')}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Sort Alphabetically
            </button>
            <button
              onClick={() => handleFilterChange('recent')}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              Sort by Recent
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
