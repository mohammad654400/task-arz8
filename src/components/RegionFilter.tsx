import React from "react";

interface RegionFilterProps {
  selectedRegion: string;
  setSelectedRegion: (region: string) => void;
}

const RegionFilter = ({
  selectedRegion,
  setSelectedRegion,
}: RegionFilterProps) => {
  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  return (
    <div className="w-full">
      <select
        value={selectedRegion}
        onChange={(e) => setSelectedRegion(e.target.value)}
        className="w-full p-3 rounded-md bg-inputBg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <option value="">Filter by Region</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RegionFilter;
