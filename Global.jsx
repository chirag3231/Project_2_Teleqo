import {getEnvValue} from "./Environment";

export const Config = {
  domain: getEnvValue('API_URL'),
  project_name: 'Telego',
  api: {
    company: {
      one: '/company/',
      all: '/company/all/',
    },
    plans: {
      one: '/plan/',
      company: '/plans/company/',
    },
    subscriber: {
      one: '/subscriber/',
      all: '/subscribers/',
    },
  }
};
