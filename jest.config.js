/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['./src/jest.setup.ts'],
  // transform: {
  //   "^.+\\.tsx?$": "./node_modules/ts-jest/preprocessor.js",
  //   "^.+\\.svg$": "./svgTransform.js" 
  // }
  // moduleNameMapper: {
  //   "\\.(css|scss|svg|png)$": "identity-obj-proxy"
  // }

  transform: {
    '.+\\.(css|styl|less|sass|scss|png|svg|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
  moduleNameMapper: {
    '^.+.(css|styl|less|sass|scss|png|svg|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  },
};