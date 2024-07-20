import fs from 'fs';
import path from 'path';
import { Data, Country, State, City } from './types';

const dataPath = path.join(__dirname, 'data.json');
const data: Data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

const resolvers = {
    countries: (): Country[] => data.countries,
    country: ({ name }: { name: string }): Country | undefined => data.countries.find((country: Country) => country.name === name),
    states: ({ countryName }: { countryName: string }): State[] | null => {
        const country = data.countries.find((country: Country) => country.name === countryName);
        return country ? country.states : null;
    },
    state: ({ countryName, stateName }: { countryName: string, stateName: string }): State | undefined => {
        const country = data.countries.find((country: Country) => country.name === countryName);
        if (!country) return undefined;
        return country.states.find((state: State) => state.name === stateName);
    },
    cities: ({ countryName, stateName }: { countryName: string, stateName: string }): City[] | null => {
        const country = data.countries.find((country: Country) => country.name === countryName);
        if (!country) return null;
        const state = country.states.find((state: State) => state.name === stateName);
        return state ? state.cities : null;
    },
    city: ({ countryName, stateName, cityName }: { countryName: string, stateName: string, cityName: string }): City | undefined => {
        const country = data.countries.find((country: Country) => country.name === countryName);
        if (!country) return undefined;
        const state = country.states.find((state: State) => state.name === stateName);
        if (!state) return undefined;
        return state.cities.find((city: City) => city.name === cityName);
    },
    neighborhoods: ({ countryName, stateName, cityName }: { countryName: string, stateName: string, cityName: string }): string[] | null => {
        const country = data.countries.find((country: Country) => country.name === countryName);
        if (!country) return null;
        const state = country.states.find((state: State) => state.name === stateName);
        if (!state) return null;
        const city = state.cities.find((city: City) => city.name === cityName);
        return city ? city.neighborhoods : null;
    },
};

export default resolvers;
