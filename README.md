# node-graphql


###  POC - GraphQL com Node e TypeScript

#### `schema.ts`: O schema.ts define a estrutura da API GraphQL, especificando os tipos de dados e as consultas disponíveis.

#### `query`: Define as operações de consulta disponíveis:

- countries: Retorna uma lista de países.
- country(name: String!): Retorna um país específico pelo nome.
- states(countryName: String!): Retorna uma lista de estados de um país específico.
- state(countryName: String!, stateName: String!): Retorna um estado específico de um país.
- cities(countryName: String!, stateName: String!): Retorna uma lista de cidades de um estado específico.
- city(countryName: String!, stateName: String!, cityName: String!): Retorna uma cidade específica de um estado.
- neighborhoods(countryName: String!, stateName: String!, cityName: String!): Retorna uma lista de bairros de uma cidade específica.

#### `resolvers`: Fornece a implementação das querys definidas no schema.