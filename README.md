## Quick step to set environment to run Ecmascript code

1.Install the Babel CLI and a preset

`npm install --save-dev babel-cli babel-preset-env`

2. Create a .babelrc file

```json
{
  "presets": ["env"]
}
```

3. To run particular file

```localhost$ babel filename.js | node```

4. To convert ES6 to ES5

```localhost$ babel filename.js```