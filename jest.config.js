'use strict';

module.exports = {
  testEnvironment: 'node',
  verbose: true,

  // Collect coverage by running "npm run test:coverage"
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.js'],
  coverageDirectory: 'coverage'
};
