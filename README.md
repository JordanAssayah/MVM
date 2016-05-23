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
|   +-- components/     [Specific components (app templates e.g.: mvm-XXX)]
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

## [Particle.io](https://particle.io)

Helpfull links:

- [Particle Device Firmware](https://docs.particle.io/reference/firmware/photon/)
- [Particle Cloud API](https://docs.particle.io/reference/api/)
- [CLI Command Reference](https://docs.particle.io/reference/cli/)
- [Particle API JS](https://docs.particle.io/reference/javascript/)

This is what we use to compile the code to flash our [Particle Photon](https://www.particle.io/prototype).

## How to contribute
### Getting started

* Make sure you have a [Github](https://github.com/signup/free) account.
* [Create a story](https://waffle.io/JordanAssayah/MVM) for your issue, assuming one does not already exist.
	* Clearly describe the issue including steps to reproduce if applicable
	* Make sure you fill in the earliest version that you know has the issue

### Pull Requests
If you want to fix bugs or make improvements, just go to https://waffle.io/JordanAssayah/MVM or https://github.com/JordanAssayah/MVM/issues and pick a story.
Don't forget to move cards in the [MVM Board](https://waffle.io/JordanAssayah/MVM).

### Making Changes

Ensure your copy is up-to-date :

```bash
$ git checkout master && git fetch && git pull
```

Create a new branch named with the waffle story ID (replace `XXX` by the story number):

If it's a bug :

```bash
$ git checkout -b MVM-bug-fix#XXX
```

If it's an improvement :

```bash
$ git checkout -b MVM-#XXX
```

When you're done, commit your changes by prefixing the commit message with the story ID, for example: `MVM-#5 Update the README.md file`.

Because you compose your comment with the id of the story, it will move automatically in the [MVM Board](https://waffle.io/JordanAssayah/MVM) **but** always take a look a it.
Like that, it will be always up to date.

### Last commit before `Dev Review`

When it is the last commit (before you push the card in [MVM Board](https://waffle.io/JordanAssayah/MVM) to "For Dev Review"), add to your comment the following tags :

If it's a bug :

```bash
$ git commit -m "MVM-bug-fix-closed#XXX blablabla... "
```

If it's an improvement :

```bash
$ git commit -m "MVM-closed#XXX blablabla... "
```

[Open a pull request](https://github.com/liip/zebra/compare) so another developer can review your changes.
