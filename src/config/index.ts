export enum EnumEndpoint {
  getPokemons,
  getPokemon,
}

interface IEndpoint {
  method: 'GET' | 'POST';
  uri: {
    pathname: string;
    query?: {
      (s: string): string | number;
    };
  };
}

export interface IConfig {
  client: {
    server: {
      protocol: string;
      host: string;
    };
    endpoint: {
      [TKey in EnumEndpoint]: IEndpoint;
    };
  };
}

export const config: IConfig = {
  client: {
    server: {
      protocol: 'http',
      host: 'zar.hosthot.ru',
    },
    endpoint: {
      [EnumEndpoint.getPokemons]: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemons',
        },
      },
      [EnumEndpoint.getPokemon]: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemon/{id}',
        },
      },
    },
  },
};

export default config;
