
import axios from "axios";
import { Country } from "../types/Country";


export const fetchCountries = async (): Promise<Country[]> => {
  const response = await axios.get("/data.json");
  return response.data;
};
