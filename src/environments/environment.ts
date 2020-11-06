// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
  apiHeader: {
    host: 'x-rapidapi-host',
    hostValue: 'mashape-community-urban-dictionary.p.rapidapi.com',
    key: 'x-rapidapi-key',
    keyValue: 'a793f62aacmshb9779ee844741f5p127045jsn24234269d0ff',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
