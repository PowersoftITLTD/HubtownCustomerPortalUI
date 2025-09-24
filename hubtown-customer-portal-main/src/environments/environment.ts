// eslint-disable-next-line @typescript-eslint/no-var-requires
// const { version } = require('../../package.json');

export const environment = {
  production: false,
  appVersion: '', //`${version}-dev`,
  // Replace this with your server API URL
  // apiUrl: 'http://13.127.136.90:5002/api',
  // apiUrl: 'http://13.204.21.84:5000/api',
    apiUrl: 'https://cpapi.piplapps.com/api',
    
  settings: {
    auth: {
      // OAuth2 credentials
      clientId: 'fake-client-id', // <Your auth client id here>
      secretId: 'fake-secret-id', // <Your auth secret id here>

      // keys to store tokens at local storage
      accessTokenKey: 'DoPS3ZrQjM',
      refreshTokenKey: 'nmlP8PW2nb',
    },
  },
};
