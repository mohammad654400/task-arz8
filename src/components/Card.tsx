import { Country } from "../types/Country";

interface CardProps {
  country: Country;
}

const Card = ({ country }: CardProps) => (
  <div className="bg-cardBackground w-full h-full  rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ">
    <img
      src={country.flags.png}
      alt={`${country.name} flag`}
      className="w-full h-40 object-cover rounded-t-lg"
    />
    <div className="p-4">
      <h2 className="text-primary font-semibold text-lg mb-2">
        {country.name}
      </h2>
      <p className="text-secondary text-sm mb-1">
        <span className="font-semibold">Population:</span>{" "}
        {country.population.toLocaleString()}
      </p>
      <p className="text-secondary text-sm mb-1">
        <span className="font-semibold">Region:</span> {country.region}
      </p>
      <p className="text-secondary text-sm">
        <span className="font-semibold">Capital:</span> {country.capital}
      </p>
    </div>
  </div>
);

export default Card;
