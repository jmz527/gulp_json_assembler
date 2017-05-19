# gulp_json_assembler
Gulp task-runner for assembling multiple json files into one

# Description

Gulp task-runner I built, assembles a directory of json files into one json file.

# Technologies Used:

NodeJS + Gulp

# Installation Instructions:

First, clone this repo to a directory on your local machine and run npm install:

```sh
git clone git@github.com:jmz527/gulp_json_assembler.git
cd gulp_json_assembler/
npm i
```

After gulp is installed, run the npm "test" command:

```sh
npm run test
```

Or the "build-json" command:

```sh
gulp build-json
```

Running either will take all the json files in the 'json_splices' folder, assemble them into one json object, and store it in the 'result.json' file in the 'json_assembled' directory. Go take a look!


Make sure to go into the 'json_splices' directory and play around with the json files, even add new files if you want.

I have also provided a gulp default task, so if you want gulp to watch the 'json_splices' folder for any changes and automatically assemble "result.json" every time you edit, you can! Just run gulp like so:

```sh
gulp
```

# Directory Tree:


```sh
.
├── README.md
├── gulpfile.js
├── json_assembled
│   └── result.json
├── json_splices
│   ├── array.json
│   └── tree.json
├── main_util.js
└── package.json

```
