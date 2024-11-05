import { useState } from "react";
import useCountries from "../hooks/useCountries";
import SearchInput from "../components/SearchInput";
import RegionFilter from "../components/RegionFilter";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Card from "../components/Card";

const Home = () => {
  const [query, setQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const { data: countries, isLoading, isError } = useCountries();

  if (isError) return <p>Error loading countries.</p>;

  const filteredCountries = countries
    ?.filter((country) =>
      country.name.toLowerCase().includes(query.toLowerCase())
    )
    .filter((country) =>
      selectedRegion ? country.region === selectedRegion : true
    );

  return (
    <div className="flex flex-col items-center p-8 px-20 h-full w-full bg-background">
      <div className="flex w-full mb-6 gap-4 justify-between flex-col lg:flex-row">
        <div className="flex lg:w-1/3 w-full">
          <SearchInput query={query} setQuery={setQuery} />
        </div>
        <div className="flex lg:w-1/4 w-full">
          <RegionFilter
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-8 justify-center w-full">
        {isLoading
          ? [...Array(12)].map((_, index) => (
              <div
                key={index}
                className="w-64 p-4 bg-cardBackground rounded shadow-md"
              >
                <Skeleton height={20} width="60%" />
                <Skeleton height={150} className="my-2" />
                <Skeleton height={20} width="80%" />
                <Skeleton height={20} width="70%" />
              </div>
            ))
          : filteredCountries?.map((country) => (
              <div key={country.alpha3Code} className="w-64 h-80 my-8">
                <Card country={country} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default Home;
