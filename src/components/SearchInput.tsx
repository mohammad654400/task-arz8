import React from "react";

interface SearchInputProps {
  query: string;
  setQuery: (query: string) => void;
}

const SearchInput = ({ query, setQuery }: SearchInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleChange}
      placeholder="Search for a country..."
      className="bg-inputBg p-3 rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-primary mb-4"
    />
  );
};

export default SearchInput;
