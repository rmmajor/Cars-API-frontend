
module.exports = async () =>  {
  return {
    preset: 'jest',
    testEnvironment: 'jsdom',
    collectCoverageFrom: [
      '**/*.{js,jsx}',
      '*.{js,jsx}',
      "./src/**",
      '!**/node_modules/**',
      '!**/vendor/**',
    ],
    // setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  };
};