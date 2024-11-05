import { useParams, useNavigate } from "react-router-dom";
import useCountries from "../hooks/useCountries";

const CountryDetail = () => {
  const { countryCode } = useParams();
  const navigate = useNavigate();
  const { data: countries, isLoading, isError } = useCountries();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading country details.</p>;

  const country = countries?.find((c) => c.alpha3Code === countryCode);

  if (!country) return <p>Country not found.</p>;

  return (
    <div className="flex flex-col items-center p-8 px-20 h-full w-full bg-background text-text">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-cardBackground text-primary rounded-md shadow-md hover:bg-opacity-80"
      >
        ← Back
      </button>
      <div className="flex flex-col md:flex-row items-start gap-8 w-full max-w-4xl bg-cardBackground p-8 rounded-lg shadow-lg">
        <img
          src={country.flags.png}
          alt={`${country.name} flag`}
          className="w-full md:w-1/2 h-auto object-cover rounded-md"
        />
        <div className="flex flex-col w-full md:w-1/2">
          <h2 className="text-primary font-semibold text-2xl mb-4">
            {country.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="text-secondary">
              <span className="font-semibold">Native Name:</span>{" "}
              {country.nativeName}
            </p>
            <p className="text-secondary">
              <span className="font-semibold">Top Level Domain:</span>{" "}
              {country.topLevelDomain.join(", ")}
            </p>
            <p className="text-secondary">
              <span className="font-semibold">Population:</span>{" "}
              {country.population.toLocaleString()}
            </p>
            <p className="text-secondary">
              <span className="font-semibold">Currencies:</span>{" "}
              {country.currencies.map((currency) => currency.name).join(", ")}
            </p>
            <p className="text-secondary">
              <span className="font-semibold">Region:</span> {country.region}
            </p>
            <p className="text-secondary">
              <span className="font-semibold">Languages:</span>{" "}
              {country.languages.map((language) => language.name).join(", ")}
            </p>
            <p className="text-secondary">
              <span className="font-semibold">Sub Region:</span>{" "}
              {country.subregion}
            </p>
            <p className="text-secondary">
              <span className="font-semibold">Capital:</span> {country.capital}
            </p>
          </div>
          <p className="text-secondary mt-4 font-semibold">Border Countries:</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {country.borders ? (
              country.borders.map((border) => (
                <span
                  key={border}
                  className="bg-secondary text-white px-3 py-1 rounded-md shadow"
                >
                  {border}
                </span>
              ))
            ) : (
              <span>No border countries</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
