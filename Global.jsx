import {getEnvValue} from "./Environment";

export const Config = {
  domain: getEnvValue('API_URL'),
  project_name: 'Telego',
  api: {
    company: {
      one: '/api/v1/company/',
      all: '/api/v1/company/all/',
    },
    plans: {
      one: '/api/v1/plan/',
      company: '/api/v1/plans/company/',
    },
    subscriber: {
      one: '/api/v1/subscriber/',
      all: '/api/v1/subscribers/',
    },
  }
};
