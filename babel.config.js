module.exports = {//按需引入element-ui,需要配合借助 babel-plugin-component (npm install babel-plugin-component -D)，并且更改"es2015"为"@babel/preset-env"
  presets: ["@vue/cli-plugin-babel/preset",["@babel/preset-env", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
};
