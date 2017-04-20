## Quick step to set environment to run Ecmascript6 code

1.Install the Babel CLI and a preset

```bash
npm install --save-dev babel-cli babel-preset-env
```

2. Create a .babelrc file

```json
{
  "presets": ["env"]
}
```

3. To run particular file

```bash
localhost$ babel filename.js | node
```

4. To convert ES6 to ES5

 ```bash
 localhost$ babel filename.js
 ```