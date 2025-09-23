// eslint-disable-next-line @typescript-eslint/no-var-requires
// const { version } = require('../../package.json');

export const environment = {
  production: true,
  appVersion: '',
  // Replace this with your server API URL
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
