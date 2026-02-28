/** @type {import("jest").Config} **/
export default {
  // use the ESM-aware ts-jest preset
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: "node",
  moduleFileExtensions: ['ts', 'js'],

  // treat TypeScript files as ES modules so imports are understood
  extensionsToTreatAsEsm: ['.ts'],

  transform: {
    '^.+\\.ts$': ['ts-jest', { useESM: true }]
  }
};