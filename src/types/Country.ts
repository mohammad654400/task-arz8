export interface Country {
  name: string;
  alpha3Code: string;
  population: number;
  region: string;
  subregion?: string;
  capital: string;
  flags: {
    png: string;
    svg: string;
  };
  nativeName: string;
  topLevelDomain: string[];
  currencies: { code: string; name: string; symbol: string }[];
  languages: { iso639_1: string; iso639_2: string; name: string; nativeName: string }[];
  borders?: string[];
}
