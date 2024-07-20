export interface Neighborhood {
    name: string;
  }
  
  export interface City {
    name: string;
    neighborhoods: string[];
  }
  
  export interface State {
    name: string;
    cities: City[];
  }
  
  export interface Country {
    name: string;
    states: State[];
  }
  
  export interface Data {
    countries: Country[];
  }
  