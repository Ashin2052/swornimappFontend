//
//
//
// import 'zone.js/dist/zone-node';
// import 'reflect-metadata';
// import {enableProdMode} from '@angular/core';
//
// import * as express from 'express';
// import {join} from 'path';
// import {readFileSync} from 'fs';
//
//
// import * as mongoose from 'mongoose';
// import bodyParser from 'body-parser';
// const routeManager = require('./server/routes');
//
// // Faster server renders w/ Prod mode (dev mode never needed)
// enableProdMode();
//
// // Express server
// const app = express();
//
// const PORT = process.env.PORT || 4000;
// const DIST_FOLDER = join(process.cwd(), 'dist');
//
// // Our index.html we'll use as our template
// const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();
//
// // * NOTE :: leave this as require() since this file is built Dynamically from webpack
// const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');
//
// // Express Engine
// import {ngExpressEngine} from '@nguniversal/express-engine';
// // Import module map for lazy loading
// import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';

// // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
// app.engine('html', ngExpressEngine({
//   bootstrap: AppServerModuleNgFactory,
//   providers: [
//     provideModuleMap(LAZY_MODULE_MAP)
//   ]
// }));
//
// app.set('view engine', 'html');
// app.set('views', join(DIST_FOLDER, 'browser'));
//
//
//
// // Server static files from /browser
// app.get('*.*', express.static(join(DIST_FOLDER, 'browser'), {
//   maxAge: '1y'
// }));
//
//
// // ALl regular routes use the Universal engine
// app.get('*', (req, res) => {
//   res.render('index', { req });
// });
//
//
// // Start up the Node server
// app.listen(PORT, () => {
//   console.log(`Node Express server listening on http://localhost:${PORT}`);
// });
//
// mongoose.connect('mongodb+srv://mahatashin:barcelona@cluster0-ykjjj.mongodb.net/sattaKing?retryWrites=true&w=majority', {
//   useNewUrlParser: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true
// })
//   .then(() => console.log('Database connected successfully!'))
//   .catch((err) => console.error(err));
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
//
// /* - Example Express Rest API endpoints -
// */
//
// // app.use(express.static(__dirname + '/src/assets/image'));
// app.use('/', routeManager);



////////////////////

import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import {enableProdMode} from '@angular/core';

import * as express from 'express';
import {join} from 'path';
import {readFileSync} from 'fs';
import * as cors from 'cors';
import * as path from 'path';

import * as mongoose from 'mongoose';
import bodyParser from 'body-parser';
const routeManager = require('./server/routes');

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();
app.use(cors());
const PORT = process.env.PORT || 4000;
const DIST_FOLDER = join(process.cwd(), 'dist');

// Our index.html we'll use as our template
const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');

// Express Engine
import {ngExpressEngine} from '@nguniversal/express-engine';
// Import module map for lazy loading
import {provideModuleMap} from '@nguniversal/module-map-ngfactory-loader';

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

require('dotenv').config({ path: 'variables.env' });

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

require('dotenv').config({ path: 'variables.env' });
app.use(cors());

mongoose.connect(process.env.URL, { useNewUrlParser: true , useFindAndModify: true});
mongoose.connection.on('connected', () =>
  console.log('mongodb connected successfully.')
);
mongoose.connection.on('error', error => console.log('connection failed.'));

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

/* - Example Express Rest API endpoints -
*/

app.use(bodyParser.json({}));

app.use(express.static(__dirname + '/assets/image'));
app.use('/static', express.static(path.join(__dirname, '/assets/image')));

app.use('/api', routeManager);

/* - Example Express Rest API endpoints -
  app.get('/api/**', (req, res) => { });
*/

// Server static files from /browser
app.get('*.*', express.static(join(DIST_FOLDER, 'browser'), {
  maxAge: '1y'
}));

// ALl regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

// Start up the Node server
app.listen(process.env.PORT, () => {
  console.log(path.join(__dirname, 'assets/image'));
});
