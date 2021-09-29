// import external dependencies
import 'jquery';

// Import everything from autoload
import './autoload/**/*'

// import local dependencies
import Router from './util/Router';
import common from './routes/common';
import home from './routes/home';
import historique from './routes/historique';
import contact from './routes/contact';

/** Populate Router instance with DOM routes */
const routes = new Router({
  // All pages
  common,
  // Home page
  home,
  // Historique page
  historique,
  // Contact page
  contact,
});

// Load Events
jQuery(document).ready(() => routes.loadEvents());
