module.exports = {
    preset: 'jest-puppeteer',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.js$': 'babel-jest'
    },
    coverage: true,
    transformIgnorePatterns: ['/node_modules/(?!(axios)/)'],
    setupFilesAfterEnv: ['./src/setupTests.js']
};
