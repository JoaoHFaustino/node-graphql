import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Query {
    countries: [Country]
    country(name: String!): Country
    states(countryName: String!): [State]
    state(countryName: String!, stateName: String!): State
    cities(countryName: String!, stateName: String!): [City]
    city(countryName: String!, stateName: String!, cityName: String!): City
    neighborhoods(countryName: String!, stateName: String!, cityName: String!): [String]
  }

  type Country {
    name: String
    states: [State]
  }

  type State {
    name: String
    cities: [City]
  }

  type City {
    name: String
    neighborhoods: [String]
  }
`);

export default schema;
