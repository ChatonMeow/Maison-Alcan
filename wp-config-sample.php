<?php

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'lamp');

/** MySQL database username */
define('DB_USER', 'lamp');

/** MySQL database password */
define('DB_PASSWORD', 'lamp');

/** MySQL hostname */
define('DB_HOST', 'database');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'x-bg_5^AOH||(-L.Yp=(p(]JP30k%8@8x]EjO;Xz838|=6C0D1h{k|evQcZqKND/');
define('SECURE_AUTH_KEY',  'Oi(L/B!->9-U;rT-[Gi$1;;fO$#S3yf-=v&PTslL%(PwlfU%M.l!.>;,.~Ao/5yI');
define('LOGGED_IN_KEY',    'KsnE)M6O-$}K7S@bjG /vU)AkA46YEv8eYx |CZ-~&vhl=|]P{e3t6Q[Z@/?U-?M');
define('NONCE_KEY',        'X=5ji<^a|C=KA|/yc``<Ic `;w+?{oal_43|vg =.d&0L/L4rtHOu9]$!1C;5+DF');
define('AUTH_SALT',        'f1|NeS-)aXTKVo$&~-+#.-@aJR0w#GQ^{M1}9-%8zrjpt~It}J#)|hVhXCqL4S1$');
define('SECURE_AUTH_SALT', 'kj-D]/g~OiM?Kl- c{L^8a%/7Kg+.gl6wPY0i-/ucbS%DBB_tMRRUkic|CnIc1rA');
define('LOGGED_IN_SALT',   '+>z0-}DaZ42pp]m/^VSo;uV5N&|QM-AQPaJO22~47|eAtd:]=O+pJ_`~5z<iq8P+');
define('NONCE_SALT',       'QQ?yVGD],:q:cLpA-!~L5)|P:Obfq~-G,!SzkO)e++|Dat%nyThoo[y=zu;;2`m4');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy publishing. */

define('WP_HOME', 'http://maisonalcan.lndo.site');
define('WP_SITEURL', 'http://maisonalcan.lndo.site');

/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH')) {
	define('ABSPATH', __DIR__ . '/');
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
