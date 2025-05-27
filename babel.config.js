module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    "react-native-reanimated/plugin",
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".js", ".json"],
        alias: {
          "@": "./src",
          types: "./types"
        }
      }
    ]
  ]
};
