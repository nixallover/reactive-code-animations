module.exports = {
  name: "reactive-code-animations",
  preset: "../../jest.config.js",
  coverageDirectory: "../../coverage/apps/reactive-code-animations/",
  snapshotSerializers: [
    "jest-preset-angular/AngularSnapshotSerializer.js",
    "jest-preset-angular/HTMLCommentSerializer.js"
  ]
};
