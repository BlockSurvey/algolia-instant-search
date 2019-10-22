1. update alogia's app key and search key id in app-component.ts
2. update environment.ts for accessing firestore



Update: 
---------
a) Add below to angular.json

  "styles": [
              "node_modules/instantsearch.css/themes/reset.css",
              "node_modules/instantsearch.css/themes/algolia.css" ]

b) Add below to pollyfills.ts

// See: https://github.com/algolia/angular-instantsearch/issues/90
(window as any).process = {
  env: { DEBUG: undefined },
};



If below error is seen
-----------------------
ERROR in ./node_modules/angular-instantsearch/fesm5/angular-instantsearch.js
Module not found: Error: Can't resolve 'instantsearch.js/es' in '/home/wilson/Desktop/algolia-instant-search/node_modules/angular-instantsearch/fesm5'
ERROR in ./node_modules/angular-instantsearch/fesm5/angular-instantsearch.js
Module not found: Error: Can't resolve 'instantsearch.js/es/connectors' in '/home/wilson/Desktop/algolia-instant-search/node_modules/angular-instantsearch/fesm5'

=> npm install angular-instantsearch@latest