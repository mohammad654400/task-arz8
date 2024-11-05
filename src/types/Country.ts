export interface Country {
  name: string;
  alpha3Code: string;
  population: number;
  region: string;
  capital: string;
  flags: {
    png: string;
    svg: string;
  };
}
