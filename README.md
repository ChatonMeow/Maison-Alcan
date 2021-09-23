# Maison Alcan

## First time setup
1. [Installer Lando](https://github.com/lando/lando/releases)
2. [Installer Yarn](https://yarnpkg.com/lang/en/docs/cli/install/)
3. Aller dans le dossier du projet puis `lando start`
4. Copier-coller le fichier `wp-config-sample.php` et le renommer `wp-config.php`. Y mettre les bonnes infos de db.
5. Importer la base de données (soit avec un logiciel, ou directement avec `lando db-import NOM-DE-DB.sql`)
6. `cd wp-content/themes/maisonalcan`
7. `lando composer install`
8. `yarn`
9. `yarn start`

## Juste partir le projet (builder les assets & live reload aux changements)
1. Aller dans le dossier du thème
2. `lando start`
3. `yarn start`

## Builder le projet
1. Aller dans le dossier du thème
2. `yarn build` (si un prod build, `yarn build:production`)