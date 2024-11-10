import React, { useState, useRef, useEffect } from "react";
import { baseUrl } from "../config";
import { FaSearchLocation } from "react-icons/fa";

const SearchDropdown = (props) => {
  const [searchTerm, setSearchTerm] = useState<String>("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [items, setItems] = useState({ hits: [] });

  const queryGet = async (e) => {
    try {
      await fetch(
        `${baseUrl}/graph/api/geocoder?lat=${props.lat}&lon=${props.lon}&q=${e.target.value}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data.locations);
          if (data.locations.hits === undefined) {
            setIsOpen(false);
          } else {
            setItems(data.locations);
            setIsOpen(true);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
    queryGet(e);
  };

  const handleItemClick = (item, index) => {
    if (index === 10) {
      props.outLat(props.lat);
      props.outLon(props.lon);
    } else {
      props.outLat(items.hits[index].point.lat);
      props.outLon(items.hits[index].point.lng);
    }

    setSearchTerm(item);
    setIsOpen(false);
  };

  return (
    <div className="" ref={dropdownRef}>
      <div className="relative flex justify-between">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={() => setIsOpen(true)}
          placeholder={props.placeholder}
          className="w-full outline-none bg-transparent text-black-600 text-sm"
        />
        <FaSearchLocation className="text-gray-500 cursor-pointer" />
      </div>

      {isOpen && Object.keys(items).length > 0 && (
        <div className="absolute z-[10000] w-1/3 mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-auto">
          <div
            onClick={() => handleItemClick("Current Location", 10)}
            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
          >
            Use Current Location
          </div>
          {items.hits.map((item, index) => (
            <div
              key={index}
              onClick={() => handleItemClick(item.name, index)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;
