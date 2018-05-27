module.exports = wallaby => {
  const compiler = wallaby.compilers.babel({
    presets: [["@vue/app", { modules: "commonjs" }]]
  });

  return {
    files: ["src/**/*", "jest.config.js", "package.json"],

    tests: ["tests/**/*.spec.js"],

    env: {
      type: "node",
      runner: "node"
    },

    compilers: {
      "**/*.js": compiler,
      "**/*.vue": require("wallaby-vue-compiler")(compiler)
    },

    preprocessors: {
      "**/*.vue": file =>
        require("vue-jest").process(file.content, file.path)
    },

    setup: function(wallaby) {
      const jestConfig =
        require("./package").jest ||
        require("./jest.config");
      jestConfig.transform = {};
      wallaby.testFramework.configure(jestConfig);
    },

    testFramework: "jest",

    debug: true
  };
};
