import { useQuery } from "@tanstack/react-query";
import { Country } from "../types/Country";
import { fetchCountries } from "../services/api";

const useCountries = () => {
  return useQuery<Country[], Error>({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });
};

export default useCountries;
