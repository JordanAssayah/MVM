# MVM (Make Visual Music)
[![Stories in Ready](https://badge.waffle.io/JordanAssayah/MVM.png?label=ready&title=Ready)](https://waffle.io/JordanAssayah/MVM)
[![Stories in Progress](https://badge.waffle.io/JordanAssayah/MVM.png?label=In%20Progress&title=In%20Progress)](https://waffle.io/JordanAssayah/MVM)
[![Stories in Dev review](https://badge.waffle.io/JordanAssayah/MVM.png?label=In%20Dev%20Review&title=For%20Dev%20Review)](https://waffle.io/JordanAssayah/MVM)
[![Closed stories](https://badge.waffle.io/JordanAssayah/MVM.png?label=done&title=Done)](https://waffle.io/JordanAssayah/MVM)

This project use the following components :
- [Bulma](http://bulma.io "Framework CSS based on Flexbox") (CSS)
- [VueJS](https://vuejs.org "Framework JavaScript similar to React") (JS)
- [Gulp](https://gulpjs.com "Task Runner") (TaskRunner)
- [Browserify](http://browserify.org "JavaScript Bundler") (Bundler)
- [Particle Server](https://github.com/spark/spark-server "REST API Server") (REST API Server)
- [Particle API JS](https://docs.particle.io/reference/javascript/ "JS SDK") (JS SDK to interact with REST API)

## Download and run the project

```bash
# Clone the project
$ git clone https://github.com/JordanAssayah/MVM.git

# Enter in the forlder and install dependencies
$ cd MVM && npm i

# Run the "Dev" Server
$ npm run dev
```

## Project Commands

```bash
# install dependencies
$ npm i

# serve with hot reload at localhost:8080
$ npm run dev

# build for production with minification
$ npm run build

# lint all *.js and *.vue files
$ npm run lint

# run unit tests
$ npm test

# Use gulp to compile bulma.sass to bulma.css
$ gulp
```

For more information see the [docs for vueify](https://github.com/vuejs/vueify).

## Folder Structures

```
./
+-- dist/
|   +-- build.js        [All the final JS code compiled]
+-- bulma/
|   +-- bulma.sass      [Importing bulma and generate customized style]
+-- img/                [A folder with static images]
+-- scripts/            [A folder that contains some js files]
+-- src/                [Here is the main temlpates App]
|   +-- components/     [Specific components (app templates e.g.: mmwf-XXX)]
|   +-- pages/          [Page templates e.g.: Home.vue]
|   +-- App.vue         [Main template]
|   +-- main.js         [Import all the file to be built (build.js)]
|   +-- routes.js       [The routing file]
+-- stylesheets/        [Contains the compiled css of bulma]
+-- test/
|   +-- unit/
+-- .babelrc            [ECMAScript config]
+-- .eslint             [Linter config]
+-- .gitignore
+-- gulpfile.js         [Gulp tasks]
+-- index.html          [Main entry App]
+-- karma.conf.js       [PhantomJS config]
+-- package.json        [Contains all the npm components of the App]
+-- README.md           [Guide]
```
