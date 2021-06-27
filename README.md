# Lune-rouge

## First time setup
1. [Installer Lando](https://github.com/lando/lando/releases)
2. [Installer Yarn](https://yarnpkg.com/lang/en/docs/cli/install/)
3. Aller dans le dossier du projet puis `lando start`
4. `cd wp-content/themes/lunerouge`
5. `lando composer install`
6. `yarn`
7. `yarn start`

## Juste partir le projet (builder les assets & live reload aux changements)
1. Aller dans le dossier du thème
2. `lando start`
3. `yarn start`

## Builder le projet
1. Aller dans le dossier du thème
2. `yarn build` (si un prod build, `yarn build:production`)